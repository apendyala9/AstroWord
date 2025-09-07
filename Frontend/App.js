import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Size } from './Size';
import { Crossword } from './Crossword';
import { MainContextProvider } from './context/MainContext';

// Craete stack navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <MainContextProvider>
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
          <Stack.Screen
            name = "Crossword"
            component={Crossword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContextProvider>
    

  );
}


