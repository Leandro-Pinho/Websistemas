import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import Header from './src/components/header';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/detalhe';
import CartaoScreen from './src/pages/cartao';
import CategoriaScreen from './src/pages/categoria';
import SobreScreen from './src/pages/sobre';
import { AntDesign } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
 return (
   <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />    
      <HomeStack.Screen name="Details" component={DetailsScreen} />
   </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen"
         screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Categoria') {
              iconName = 'bars';
            } else if (route.name === 'Sobre') {
              iconName = 'isv';
            } else if (route.name === 'Cartao') {
              iconName = 'creditcard';
            }

            return <AntDesign name={iconName} size={24} color="black" />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Categoria" component={CategoriaScreen}/>
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Cartao" component={CartaoScreen} />
      
      </Tab.Navigator>
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
