import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { MainContext } from './context/MainContext';

async function getCrossword(topic, size) {
    try {
    const response = await fetch(`http://localhost:3000/crossword`, 
        {method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic })
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
    const [backendCrossword, setBackendCrossword] = useState(null);
    const { selectedTopic, setSelectedTopic } = useContext(MainContext);
    

    useEffect(() => {
        const fetchCrossword = async () => {
            const crossword = await getCrossword(selectedTopic);
            setCrossword(crossword);
            crossword.table.forEach((row, rowIndex) => {
                row.forEach((cell, cellIndex) => {
                    crossword.table[rowIndex][cellIndex] = cell != "-" ? '' : '-';
                });
            });
            setBackendCrossword(crossword);
            console.log(crossword);
        }
        fetchCrossword();
        
    }, [selectedTopic]);

    const handleCellChange = (row, col, text) => {
        const newCrossword = {...crossword};
        newCrossword.table[row][col] = text;
        setBackendCrossword(newCrossword);
    }
   
    return (
        <View style = {styles.container}>
            <Text>Developing Crossword Frontend is still in progress</Text>
            {crossword && crossword.table ? (
                <View>
                    {crossword.table.map((row, rowIndex) => (
                        <View style = {styles.cellcontainer}>
                            {row.map((cell, cellIndex) => (
                                <TextInput 
                                style = {[styles.cell, cell != "-" ? styles.wordcell : styles.emptycell]} 
                                editable={cell != "-" ? true : false}
                                value={backendCrossword.table[rowIndex][cellIndex]}
                                onChangeText={(text) => {
                                    handleCellChange(rowIndex, cellIndex, text);
                                }}/>
                                
                            ))}
                        </View>
                    ))}
                </View>
            ) : (
                <Text>Loading crossword...</Text>
            )}            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cell: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
    },

    wordcell: {
        backgroundColor: 'white',
    },
    emptycell: {
        backgroundColor: 'black',
        borderColor: 'white',
    },

    cellcontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
});