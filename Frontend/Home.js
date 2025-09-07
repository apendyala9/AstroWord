import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, createContext } from 'react';
import { Size } from './Size';
import { MainContext } from './context/MainContext';


export const topic = createContext();

export const Home = ({navigation}) => {

    // The above is equivalent to this ==> const navigation = props.navigation();

    const { selectedTopic, setSelectedTopic } = useContext(MainContext);

    return (
    <View style = {styles.container}>
        <ScrollView>

            <View style = {[styles.block, styles.blocksolarsystem]}>
                <Button
                title="Solar System"
                onPress={() =>{
                    setSelectedTopic('Solar System')
                    navigation.navigate('Size')}
                }/>
            </View>

            <View style = {[styles.block, styles.blockastrohistory]}>
                <Button
                title="Astronomy History"
                onPress={() =>{
                    setSelectedTopic('Astronomy History')
                    navigation.navigate('Size')}
                }/>
            </View>

            
            <View style = {[styles.block, styles.blockstarsytems]}>
                
                <Button
                title="Star Systems"
                onPress={() =>{
                    setSelectedTopic('Star Systems')
                    navigation.navigate('Size')}
                }/>

            </View>

            
            <View style = {[styles.block, styles.blockexoplanets]}>
                <Button
                title="Exoplanets"
                onPress={() =>{
                    setSelectedTopic('Exoplanets')
                    navigation.navigate('Size')}
                }/>
            </View>

            
            <View style = {[styles.block, styles.blockconstellations]}>
                <Button
                title="Constellations"
                onPress={() =>{
                    setSelectedTopic('Constellations')
                    navigation.navigate('Size')}
                }/>
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
        borderWidth: 2

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

});

