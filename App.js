import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet,Text, View, Pressable, Button, Touchable, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { Image } from 'expo-image';
import LoginScreen from './assets/screens/LoginScreen';
import HomeScreen from './assets/screens/HomeScreen';
import CameraScreen from './assets/screens/CameraScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadScreen from './assets/screens/LoadScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Cocogoose': require('./assets/fonts/cocogoose.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'LemonMilk_Bold': require('./assets/fonts/LEMONMILK-Bold.otf'),
  });
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Load" component={LoadScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#163348',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  boton_login: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 300,
    borderRadius: 45,
    elevation: 3,
    backgroundColor: '#1d90fe',
    marginBottom: 20
  },

  boton_registro: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 300,
    borderRadius: 45,
    elevation: 3,
    backgroundColor: '#1dbed8',
    marginBottom: 50
  },

  image: {
    flex: 1,
    width: '50%',
    height: '50%'
  },

  texto: {
    color: '#f9f9f9',
    fontFamily: 'Cocogoose',
    fontSize: 30,
    textAlign: 'left',
    padding: 30,
    paddingVertical: 100
  },

  textos: {
    color: '#f9f9f9',
    fontFamily: 'Montserrat',
    fontSize: 15,
    textAlign: 'center',
    
  },

});

// Path: App.js
