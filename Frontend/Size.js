import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';





export const Size = ({navigation, route}) => {

    const subject = route.params.name

    return (

        <View>
            <text>

                Please select the size of the crossword of {subject} 
                <Button onPress={() => navigation.navigate('Size', {name: 'Solar System', size: '5x5'})}>
                    5x5
                </Button>
                <Button onPress={() => navigation.navigate('Size', {name: 'Solar System', size: '10x10'})}>
                    10x10
                </Button>
                <Button onPress={() => navigation.navigate('Size', {name: 'Solar System', size: '15x15'})}>
                    15x15
                </Button>

            </text>


        </View>


    )



}



const styles = StyleSheet.create({




})