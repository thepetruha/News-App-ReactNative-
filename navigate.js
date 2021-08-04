import React from 'react';
import Main from './components/main';
import Contacts from './components/Contacts';
import FullInfo from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigation(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name={'Main'} 
                component={Main} 
                options={
                    {
                        title: 'Main', 
                        headerStyle:{height: 100, backgroundColor: '#f47474'},
                        headerTitleStyle: {fontWeight: '300'}
                    }
                } 
            />
            <Stack.Screen 
                name={'Contacts'} 
                component={Contacts} 
                options={
                    {
                        title: 'Contacts',
                        headerStyle: {backgroundColor: 'black', height: 100},
                        headerTitleStyle: {fontWeight: '300', color: 'white'}
                    } 
                } 
            />
            <Stack.Screen 
                name={'FullInfo'} 
                component={FullInfo} 
                options={
                    {
                        title: 'State',
                        headerStyle: {backgroundColor: '#F71', height: 100},
                        headerTitleStyle: {fontWeight: '300'}
                    }
                } 
            />
        </Stack.Navigator>
    </NavigationContainer>
}