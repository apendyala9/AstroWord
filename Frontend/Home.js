import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Size } from './Size';



export const Home = ({navigation}) => {

    // The above is equivalent to this ==> const navigation = props.navigation();

    const { name } = useContext();


    return (
    <View style = {styles.container}>
        <ScrollView>

            <View style = {[styles.block, styles.blocksolarsystem]}>
                <Button
                title="Solar System"
                onPress={() =>
                navigation.navigate('Size', {name: 'Solar System'})}/>
            </View>

            <View style = {[styles.block, styles.blockastrohistory]}>
                <Button
                title="Astronomy History"
                onPress={() =>
                navigation.navigate('Size', {name: 'Astronomy History'})}/>
            </View>

            
            <View style = {[styles.block, styles.blockstarsytems]}>
                
                <Button
                title="Star Systems"
                onPress={() =>
                navigation.navigate('Size', {name: 'Star Systems'})}/>

            </View>

            
            <View style = {[styles.block, styles.blockexoplanets]}>
                <Button
                title="Exoplanets"
                onPress={() =>
                navigation.navigate('Size', {name: 'Exoplanets'})}/>
            </View>

            
            <View style = {[styles.block, styles.blockconstellations]}>
                <Button
                title="Constellations"
                onPress={() =>
                navigation.navigate('Size', {name: 'Constellations'})}/>
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

