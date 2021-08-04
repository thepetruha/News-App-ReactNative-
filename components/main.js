import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Button, Image, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../styles/style.js';
import Form from './Form.js';
import { filter } from 'async';

export default function Main( {navigation} ) {
    const LoadScene = () => {
        navigation.navigate('Contacts');
    }

    const [news, setNews] = useState([
        {name: 'Google',   anons: 'Google job on FBR', full: 'FBR say what Compani Google job hus', key: '1', img: 'https://justcreative.com/wp-content/uploads/2018/11/internet-of-things.jpg'},
        {name: 'Facebook', anons: 'Google job on FBR', full: 'FBR say what Compani Google job hus', key: '2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUOo_KwckrTbi7InjRtsvoDbsRdHme4i8Qnaj7MjOAgPF5Fep7TK-0Q_i7KmV0bQvHwE&usqp=CAU'},
        {name: 'Apple',    anons: 'Google job on FBR', full: 'FBR say what Compani Google job hus', key: '3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpc44gTlRwzZks5P0JTOKJc4-FdNuUVRS0yC7SIoPYV3L2qIh6PGJn0DNIGVE_Q3uHto&usqp=CAU'}
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
        setNews((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)} />
                    <Text style={styles.title}>Form added state</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>    
            <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
            <Text style={[gStyle.title, styles.header]}>Main page</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={styles.image} source={{uri: item.img}} />
                    <Text style={styles.title}>{ item.name}</Text>
                    <Text style={styles.anons}>{ item.anons}</Text>
                </TouchableOpacity>
            )} />
            {/* <Button title={'Contacts'} onPress={LoadScene} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    iconClose:{
        textAlign: 'center',
    }, 
    iconAdd:{
        textAlign: 'center',
        marginBottom: 15
    },  
    title: {
        fontFamily: 'qc-bold',
        fontSize: 22, 
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    anons: {
        fontFamily: 'qc-light',
        fontSize: 16, 
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    image:{
        width: '100%',
        height: 200
    }
})