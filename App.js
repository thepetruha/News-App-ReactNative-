import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'qc-light': require('./assets/fonts/Quicksand-Light.ttf'),
  'qc-bold':  require('./assets/fonts/Quicksand-Bold.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if(font){
    return (
      <MainStack />
    );
  }else{
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
}