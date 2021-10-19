import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, TouchableHighlight, Alert, TouchableOpacity, StatusBar} from 'react-native';
import { Icon } from 'react-native-elements'
import SECTIONS from '../components/userList'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CartaoScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                   <Icon name='list' color='#fff' />
                   <Text style={{color: '#fff', fontFamily: 'AbrilFatface_400Regular', fontSize: 20}}>BAZAAR</Text>
                   <Icon name='face' color='#fff' />
                </View>
            </View>
            <View style={styles.cartao}>
                <View style={styles.cartaoText}>
                    <Text style={styles.cartaotitulo}>
                        Aceitamos Cartões             
                    </Text>
                    <Image style={styles.stretch}
                       source={require('../images/cartoes.png')}
                       style={styles.itemPhoto1}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        backgroundColor: '#000',
        width: '100%',
        height: 80,
    },
    headerText: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        justifyContent: 'space-between',
        flexDirection:'row',
        color: '#fff'
    },
    cartao: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'          
    },
    cartaotitulo: {
        textAlign: 'center',
        marginTop: 200,
    },
    stretch: {
        width: '100%',
        height: 220,
    },
    itemPhoto1: {
        marginTop: 10,
        width: 250,
        height: 50
    },
});


export default CartaoScreen;