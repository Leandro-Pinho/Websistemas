import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import SECTIONS from '../components/userList'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Header = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    AbrilFatface_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                   <Icon name='list' color='#fff' />
                   <Text style={{color: '#fff', fontFamily: 'AbrilFatface_400Regular', fontSize: 20}}>BAZAAR</Text>
                   <Icon name='face' color='#fff' />
                </View>
            </View>
            <Image style={styles.stretch}
                   source={require('../images/photo-header.jpeg')}
            />
            <Text style={styles.text1}> Até 50% {"\n"} de desconto </Text>
            <View style={styles.Button1}>
              <Button
                color="#FC8732"
                title="Comprar"
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#000',
      height: 80,
      width: '100%'
    },
    headerText: {
      margin: 20,
      marginTop: 50,
      justifyContent: 'space-between',
      flexDirection:'row',
      color: '#fff'
    },
    stretch: {
      width: '100%',
      height: 220,
      marginBottom: -50
    },
    Button1: {
      flexDirection: 'row',
      left: 60,
      top: -100,
    },
    text1:{
      fontSize: 25,
      left: -80,
      top: -110,
      textAlign: 'center'
    },
});

export default Header;