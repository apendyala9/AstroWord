import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';





export const Size = ({navigation, route}) => {

    const subject = route.params.name

    return (

        <View>
            <text>

                Please select the size of the crossword of {subject} 

            </text>


        </View>


    )



}



const styles = StyleSheet.create({




})