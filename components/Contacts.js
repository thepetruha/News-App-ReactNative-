import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { gStyle } from '../styles/style.js';

export default function Contacts( {navigation} ) {
    // const LoadScene = () => {
    //     navigation.goBack();
    // };

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>About Us</Text>
        </View>
    );
}

const styles = StyleSheet.create({

})