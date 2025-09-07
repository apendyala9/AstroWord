import { View, Text } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { MainContext } from './context/MainContext';

async function getCrossword(topic, size) {
    try {
    const response = await fetch(`http://localhost:3000/crossword`, 
        {method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic, size })
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return {"error": "Error getting crossword"};
    }
}

export const Crossword = ({navigation, route}) => {

    const [crossword, setCrossword] = useState(null);
    const { selectedTopic, setSelectedTopic } = useContext(MainContext);
    const { size } = route.params;
    

    useEffect(() => {
        const fetchCrossword = async () => {
            const crossword = await getCrossword(selectedTopic, size);
            setCrossword(crossword);
        }
        fetchCrossword();
        
    }, [selectedTopic, size]);
   
    return (
        <View>
            <Text>Crossword</Text>
        </View>
    )
}