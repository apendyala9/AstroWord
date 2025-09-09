import random
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser




def create_setup(data):
    ''' Return a list of dictionaries in format of {name: name, attr: {attr: value}} '''

    setup = []

    for row in data:
        available_attrs = []
        keys = list(row.keys())
        
        for i in range(2, len(keys)):  
            if row[keys[i]] and str(row[keys[i]]).strip() != '':
                available_attrs.append((keys[i], row[keys[i]]))
        
        # If no valid attributes found, skip this row
        if not available_attrs:
            continue
            
        # Randomly select one attribute
        selected_attr, selected_value = random.choice(available_attrs)
        setup.append({'name': row['name'], 'attr': {selected_attr: selected_value}})
    
    return setup



def hint_generator(dataSet):
    ''' Return a list of dictionaries in format of {name: name, hint: hint} '''

    llm = OllamaLLM(model="llama3")

    template = """Given the following data which includes the name of the data and an attribute of the data, 
        generate a longer and comprehensive description 
        - The description should be related to the attribute of the data. 
        - The description should not include the name of the data.
        - The description should be an extension of the attribute of the data.
        - The description should be at most 10 words.

        You must respond with a string only. Do not include any text before or after the string.

        Name: {name}
        Attribute: {attr}"""

    prompt = ChatPromptTemplate.from_template(template)

    #Send prompt to LLM and return as a string
    chain = prompt | llm | StrOutputParser()


    return [{'name': data['name'], 'hint': chain.invoke({'name': data['name'], 'attr': str(data['attr'])})} for data in dataSet]



def crossword_generator(dataSet, size):
    pass