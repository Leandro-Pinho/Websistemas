import React from 'react';
import { View, FlatList, Image, StyleSheet, Button, Touchable, Text, SectionList, SafeAreaView, ScrollView, Alert, _ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'


 const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.titulo}>Bem vindos ao BAZAAR</Text>
                    <Text style={styles.text1}>Nossos produtos são inspirados pelas 
                         pessoas que estão à nossa volta, com
                         suas belezas e qualidades. Produtos de
                         bom gosto especialmente para você.
                         Descubra our story e aproveite as promoções.
                    </Text>
                </View>
            </View>
            <Image style={styles.stretch}
                   source={require('../images/sobre-nos.jpg')}
            />
            <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Text style={styles.footertitulo}>
                        Rua Eusebio 10 {"\n"}
                        Centro, Cidade das {"\n"}
                        Águas {"\n"}
                        Aberta de segunda a {"\n"}
                        sexta das 10:00 às {"\n"}
                        21:00                          
                    </Text>
                </View>
                <Image style={styles.stretch}
                   source={require('../images/contato.jpg')}
                   style={styles.itemPhoto}
                />
            </View>
            <View style={styles.cartao}>
            <View style={styles.cartaoText}>
                    <Text style={styles.cartaotitulo}>
                        Nossas Redes Sociais          
                    </Text>
                </View>
                <Image style={styles.stretch}
                   source={require('../images/logos-redes.png')}
                   style={styles.itemPhoto2}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: "#F2F2F2",
      justifyContent: 'center',
      textAlign: 'center'
    },
    headerText: {
      margin: 20,
      marginTop: 20,
      textAlign: 'center',
      color: '#fff'
    },
    titulo: {
      textAlign: 'center',
      fontSize: 20,
    },
    text1: {
        marginTop: 5,
        textAlign: 'justify'
    },
    stretch: {
      width: '100%',
      height: 220
    },
    footer: {
        backgroundColor: "#F2F2F2",
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
        marginTop: 50,
    },
    footerText:{
        textAlign: 'center',
        justifyContent: 'center',
    },
    footertitulo: {
        textAlign: 'center'
    },
    itemPhoto: {
        width: 185,
        height: 200,
    },
    cartao: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartaotitulo: {
        textAlign: 'center',
    },
    itemPhoto1: {
        marginTop: 10,
        width: 250,
        height: 50
    },
    itemPhoto2: {
        margin: 30,
        width: 180,
        height: 30,
    }
});

export default Footer;