import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Size } from './Size';

// Craete stack navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name = "Home"
          component={Home}
        />
        <Stack.Screen
          name = "Size"
          component={Size}
        />
      </Stack.Navigator>
    </NavigationContainer>
    

  );
}


