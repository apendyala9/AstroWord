import { View, Text, StyleSheet } from 'react-native';

export const Home = () => {

    return (
    <View style = {styles.container}>
        <View style = {[styles.block, styles.blocksolarsystem]}>
            <text style = {styles.text}>

                Solar System

            </text>
        </View>

        <View style = {[styles.block, styles.blockastrohistory]}>
            <text style = {styles.text}>

                Astronomy History

            </text>
        </View>

        
        <View style = {[styles.block, styles.blockstarsytems]}>
            <text style = {styles.text}>

                Star Systems

            </text>
        </View>

        
        <View style = {[styles.block, styles.blockexoplanets]}>
            <text style = {styles.text}>

                Exoplanets

            </text>
        </View>

        
        <View style = {[styles.block, styles.blockconstellations]}>
            <text style = {styles.text}>

               Constellations

            </text>
        </View>

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

});

