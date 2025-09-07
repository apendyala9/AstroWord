import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MainContext} from './context/MainContext';
import {useContext} from 'react';

export const Size = ({navigation, route}) => {
    const { selectedTopic, setSelectedTopic } = useContext(MainContext);

    return (

        <View style = {styles.container}>
            <Text>

                Please select the size of the crossword  {selectedTopic}
                <View style = {styles.block}>
                    <Button onPress={() => navigation.navigate('Crossword', {size: '5x5'})} title = "5x5"/>
                </View>

                <View style = {styles.block}>
                    <Button onPress={() => navigation.navigate('Crossword', {size: '10x10'})} title = "10x10"/>
                </View>

                <View style = {styles.block}>
                    <Button onPress={() => navigation.navigate('Crossword', {size: '15x15'})} title = "15x15"/>
                </View>
            </Text>

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

})