import React from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';
import { gStyle } from '../styles/style.js';
import { Formik } from 'formik';

export default function Form( {addArticle} ) {
    return (
       <View>
            <Formik initialValues={{name: '', anons: '', full: '', img: ''}} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm(); 
            }}>
                {(props) => (
                    <View>
                        <TextInput style={styles.input} value={props.values.name} placeholder={'entered name'} onChangeText={props.handleChange('name')} />
                        <TextInput style={styles.input} value={props.values.anons} placeholder={'entered anons'} onChangeText={props.handleChange('anons')} />
                        <TextInput style={styles.input} multiline value={props.values.full} placeholder={'entered full'} onChangeText={props.handleChange('full')} />
                        <TextInput style={styles.input} value={props.values.img} placeholder={'entered img'} onChangeText={props.handleChange('img')} />
                        <Button color={'green'} title={'Added'} onPress={props.handleSubmit} />
                    </View>
                )} 
            </Formik>
       </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1, 
        marginTop: 15, 
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5,
    },
})