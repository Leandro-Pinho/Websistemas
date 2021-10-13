import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import Header from './src/components/header';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/detalhe';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="Bazaar" 
          component={HomeScreen} 
          options={{headerShown: false }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    marginLeft: 10,
    fontFamily: 'AbrilFatface_400Regular'
  },
  item: {
    margin: 10,
  },
  foto: {
    elevation: 5,
  },
  itemPhoto: {
    width: 200,
    height: 200,
    borderRadius: 3,
  },
  itemText: {
    color: '#000',
    marginTop: 5,
  },
  listaItem: {
    marginTop: -40,
    marginBottom: 30
  }
});

export default App;
