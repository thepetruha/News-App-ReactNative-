import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { gStyle } from '../styles/style.js';

export default function FullInfo( {route} ) {
    return (
        <View style={gStyle.main}>
             <Image style={styles.image} source={{uri: route.params.img}} />
            <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full} >{route.params.full}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    full:{
        fontFamily: 'qc-light',
        marginTop: 20,
        fontSize: 16, 
        textAlign: 'center',
        color: '#783783'
    },
    header: {
        fontSize: 25, 
        marginTop: 25, 
    },
    image:{
        width: '100%',
        height: 200
    }
})