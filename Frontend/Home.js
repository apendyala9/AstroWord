import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, createContext } from 'react';
import { MainContext } from './context/MainContext';


export const topic = createContext();

export const Home = ({navigation}) => {

    const { selectedTopic, setSelectedTopic } = useContext(MainContext);

    return (
    <View style = {styles.container}>
        <ScrollView>

            <View style = {[styles.block, styles.blocksolarsystem]}>
                <View style = {styles.buttonContainer}>
                    <Button
                    title="Solar System"
                    onPress={() =>{
                        setSelectedTopic('Solar System')
                        navigation.navigate('Crossword')}
                    }/>
                </View>
            </View>

            <View style = {[styles.block, styles.blockastrohistory]}>
                <View style = {styles.buttonContainer}>
                    <Button
                    title="Astronomy History"
                    onPress={() =>{
                        setSelectedTopic('Astronomy History')
                        navigation.navigate('Crossword')}
                    }/>
                </View>
            </View>

            
            <View style = {[styles.block, styles.blockstarsytems]}>
                <View style = {styles.buttonContainer}>
                    <Button
                    title="Star Systems"
                    onPress={() =>{
                        setSelectedTopic('Star Systems')
                        navigation.navigate('Crossword')}
                    }/>
                </View>
            </View>

            
            <View style = {[styles.block, styles.blockexoplanets]}>
                <View style = {styles.buttonContainer}>
                    <Button
                    title="Exoplanets"
                    onPress={() =>{
                        setSelectedTopic('Exoplanets')
                        navigation.navigate('Crossword')}
                    }/>
                </View>
            </View>

            
            <View style = {[styles.block, styles.blockconstellations]}>
                <View style = {styles.buttonContainer}>
                    <Button
                    title="Constellations"
                    onPress={() =>{
                        setSelectedTopic('Constellations')
                        navigation.navigate('Crossword')}
                    }/>
                </View>
            </View>
        </ScrollView>
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
    block: {

        width:400,
        height: 400,
        borderColor: "Black",
        borderWidth: 2,
        padding: 10,
        margin: 10,

    },
    blocksolarsystem: {
        backgroundColor: 'skyblue',


    },
    blockastrohistory: {
        backgroundColor: 'blue',


    },
    blockstarsytems: {
        backgroundColor: 'red',


    },
    blockexoplanets: {
        backgroundColor: 'green',


    },
    blockconstellations: {
        backgroundColor: 'purple',

    },
    text: {

        color: '#FFF',
        fontSize: 80,

    },
    title: {

        marginVertical: 8,
        textAlign: 'center',

    },
    buttonContainer: {
        flex: 1,
    }  

});

