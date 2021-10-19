import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, TouchableHighlight, Alert, TouchableOpacity, StatusBar} from 'react-native';
import { Icon } from 'react-native-elements'
import SECTIONS from '../components/userList'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Header from '../components/header'
import Footer from '../components/footer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SobreScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                   <Icon name='list' color='#fff' />
                   <Text style={{color: '#fff', fontFamily: 'AbrilFatface_400Regular', fontSize: 20}}>BAZAAR</Text>
                   <Icon name='face' color='#fff' />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Footer />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 80,
    },
    header: {
        backgroundColor: '#000',
        width: '100%'
    },
    headerText: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        justifyContent: 'space-between',
        flexDirection:'row',
        color: '#fff'
    },
});


export default SobreScreen;