import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useFonts} from 'expo-font';
import * as Font from 'expo-font';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import Google from '../Icons/google.png';
import Facebook from '../Icons/facebook.png';
import Apple from '../Icons/apple.png';
import Logo from '../Icons/logo_circuit.png';




export default function LoginScreen({navigation}) {
    
    //const [fontsLoaded] = useFonts({
    //    'LemonMilk_Bold': require('./assets/fonts/LEMONMILK-Bold.otf')
    //});

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={Logo}/>
        <TouchableOpacity style={styles.loginBtn}>
          <Image source={Google} style={styles.buttonImage} />
          <Text style={styles.loginText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Image source={Facebook} style={styles.buttonImage} />
          <Text style={styles.loginText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
        <Image source={Apple} style={styles.buttonImage} />
          <Text style={styles.loginText}>Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.separador}></TouchableOpacity>

        <TextInput style={styles.textInput} placeholder='Correo electrónico o teléfono*'>
        </TextInput>

        <TextInput style={styles.textInput} placeholder='Contraseña' secureTextEntry={true}>
          
        </TextInput>

        <TouchableOpacity style={styles.boton_login} onPress={()=> navigation.navigate("Camera")}>
          <Text style={styles.signupText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.forgottenText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>

        <Text style={{fontSize:12,fontFamily: 'Montserrat',color:'#f9f9f9', marginTop:50, marginBottom:15 }}>Al ingresar aceptas nuestras Políticas de privacidad</Text>

        
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
    logo:{
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        marginBottom: 43,
    },
    image: {
        width: '60%',
        height: '20%',
        resizeMode: 'contain', 
      },

      buttonImage: {
        width: '65%',
        height: '65%',
        resizeMode: 'contain',
        marginLeft: -220,
      },
    separador:{
        backgroundColor: '#f9f9f9',
        height: 1,
        width: '90%',
        margin: 40,
    },

    textInput:{
        width: '90%',
        backgroundColor: '#afb4b7',
        borderRadius: 17,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        fontFamily: 'Montserrat',
        color:'#6d7d87'
    },

    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#f9f9f9',
        marginBottom: 43,
        fontFamily: 'LemonMilk_Bold'
    
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#f9f9f9',
        marginBottom: 40,
        fontFamily: 'Cocogoose'
    },
    loginBtn: {
        width: '90%',
        backgroundColor: '#f9f9f9',
        borderRadius: 25,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    loginText: {
        color: '#163348',
        fontFamily: 'Montserrat',
        fontSize: 18
    },
    signupText: {
        color: '#f9f9f9',
        fontFamily: 'Montserrat',
        fontSize: 20
    },

    forgottenText: {
        color: '#f9f9f9',
        fontFamily: 'Montserrat',
        fontSize: 14
    },

    boton_login: {
        width: '90%',
        backgroundColor: '#1d90fe',
        borderRadius: 25,
        
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10

      },
});