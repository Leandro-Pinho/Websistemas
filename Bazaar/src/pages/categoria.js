import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import Footer from '../components/footer';
import Header from '../components/header';
import SECTIONS from '../components/userList'
import { AbrilFatface_400Regular } from '@expo-google-fonts/abril-fatface'
import { 
  Almarai_300Light,
  Almarai_400Regular,
  Almarai_700Bold,
  Almarai_800ExtraBold 
} from '@expo-google-fonts/almarai'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from '../components/categorias';

const Stack = createNativeStackNavigator();

const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image 
          source={{ uri: item.uri, }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };
  
  
  function CategoriaScreen({ navigation }) {
  
    let [fontsLoaded] = useFonts({
      AbrilFatface_400Regular,
      Almarai_400Regular,
      Almarai_700Bold,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    return (
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
         
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerText}>
              <Icon name='list' color='#fff' />
              <Text style={{color: '#fff', fontFamily: 'AbrilFatface_400Regular', fontSize: 20}}>BAZAAR</Text>
              <Icon name='face' color='#fff' />
            </View>
          </View>
          <SectionList style={styles.listaItem}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={Lista}
            renderSectionHeader={({ section }) => (
              <View style={styles.foto}>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                <FlatList 
                  showsHorizontalScrollIndicator={false}
                  data={section.data}
                  horizontal
                  renderItem={({ item }) => { 
                    return (
                      <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
                        <ListItem item={item} />
                      </TouchableOpacity>
                    );
                }}/>
              </View>
            )}
            renderItem={({ item, section }) => {
              return null;
              return <ListItem item={item} />;
            }}
          />
  
          
          </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
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
    sectionHeader: {
        fontWeight: '800',
        fontSize: 20,
        color: '#000',
        marginLeft: 10,
        marginTop: 30,
        fontFamily: 'Almarai_700Bold'
      },
      item: {
        margin: 10,
        justifyContent: 'center'
      },
      foto: {
        elevation: 5,
      },
      itemPhoto: {
        width: 170,
        height: 170,
        borderRadius: 3,
      },
      itemText: {
        color: '#000',
        marginTop: 5,
        textAlign: 'center',
        fontSize: 17,
      },
      listaItem: {
        marginTop: 0,
        marginBottom: 30
      }
});


export default CategoriaScreen;