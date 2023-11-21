import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet,Text, View, Pressable, Button, Touchable, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
import { Image } from 'expo-image';


SplashScreen.preventAutoHideAsync();
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';



export default function HomeScreen({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);
    
    useEffect(() => {
        async function prepare() {
          try {
            // Pre-load fonts, make any API calls you need to do here
            await Font.loadAsync(Entypo.font);
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            // Tell the application to render
            setAppIsReady(true);
          }
        }
    
        prepare();
    
      }, []);
      const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          // This tells the splash screen to hide immediately! If we call this after
          // `setAppIsReady`, then we may see a blank screen while the app is
          // loading its initial state and rendering its first pixels. So instead,
          // we hide the splash screen once we know the root view has already
          // performed layout.
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);
    
      if (!appIsReady) {
        return null;
      }
    
    return(
        <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.imgur.com/hyRQjdE.png',
        }}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      />
      <Text style= {styles.texto}>Escanea y obtén el diagrama de tus Circuitos</Text>
      
      <Pressable style={styles.boton_login} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textos}>Iniciar Sesión</Text>
      </Pressable>
      <Pressable style={styles.boton_registro}>
        <Text style={styles.textos}>Registrar</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
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
      width: 350,
      borderRadius: 45,
      elevation: 3,
      backgroundColor: '#1d90fe',
      marginBottom: 20
    },
  
    boton_registro: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      width: 350,
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