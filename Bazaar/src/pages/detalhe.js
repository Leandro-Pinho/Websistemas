import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, TouchableHighlight, Alert, TouchableOpacity, StatusBar} from 'react-native';
import { Icon } from 'react-native-elements'
import SECTIONS from '../components/userList'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Separator = () => (
  <View style={styles.separator} />
);

const DetailsScreen = ({ navigation, route}) => {
  const data = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Icon name='chevron-left' style={styles.icon}
              onPress={() => navigation.pop()}
        />
        <Text style={styles.text}>Detalhes</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.img}>
          <Image 
            source={{ uri: data.uri, }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.Descricao}>{data.Descricao}</Text>
        <Separator />
        <Text style={styles.Preco}>{data.Preco}</Text>
        <Text style={styles.parcela}>{data.parcela}</Text>
      </View>
      <View style={styles.page}>
        <Button style={styles.Button}
          color="#FC8732"
          title="Comprar"
          onPress={() => Alert.alert('Comprou')}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  text: {
    marginLeft: 100,
    fontSize: 20
  },
  imageContainer: {
    justifyContent: 'center'
  },
  img: {
    marginTop: 30,
    alignContent: 'center',
    alignItems: 'center'
  },
  itemPhoto: {
    width: 300,
    height: 400,
    borderRadius: 3,
  },
  Descricao: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  Preco: {
    fontSize: 24,
    color: 'red',
    marginLeft: 20,
  },
  parcela: {
    fontSize: 16,
    marginLeft: 20,
  },
  separator: {
    marginVertical: 8,
    margin: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  page: {
    margin: 20,
    
    justifyContent: 'center'
  },
  Button: {
    alignContent: 'center',
    marginTop: 20,
  }
});
export default DetailsScreen;