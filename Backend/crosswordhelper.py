import random
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field





def create_setup(data):
    ''' Return a list of dictionaries in format of {name: name, attr: {attr: value}} '''

    setup = []

    for row in data:
        ran = random.randint(2, len(row) - 1)
        while(not row[list(row.keys())[ran]] or row[list(row.keys())[ran]] == ''):
            ran += 1
            if (ran == len(row)):
                ran = 2
        setup.append({'name': row['name'], 'attr': {list(row.keys())[ran]: row[list(row.keys())[ran]]}})
    return setup



def hint_generator(dataSet):
    ''' Return a list of dictionaries in format of {name: name, hint: hint} '''

    llm = OllamaLLM(model="llama3")

    class Output(BaseModel):
        name: str = Field(description="The name of the data")
        hint: str = Field(description="The hint for the data")

    parser = JsonOutputParser(pydantic_object=Output)

    template = """Given the following data which includes the name of the data and an attribute of the data, 
        generate a hint for the data that would be suitable for a crossword puzzle. The hint should be related to the attribute of the data. 
        The hint should not include the name of the data.

        You must respond with valid JSON only. Do not include any text before or after the JSON.
        Put the original name in the name field and the generated hint in the hint field.

        {format_instructions}

        Name: {name}
        Attribute: {attr}"""

    prompt = ChatPromptTemplate.from_template(template)
    chain = prompt | llm | parser
    return [chain.invoke({'name': data['name'], 'attr': str(data['attr']), 'format_instructions': parser.get_format_instructions()}) for data in dataSet]