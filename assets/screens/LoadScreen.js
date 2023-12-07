import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useFonts} from 'expo-font';
import * as Font from 'expo-font';
import { Image } from 'expo-image';

export default function LoadScreen ({navigation}) {


    return (
      <View style={styles.container}>
        
        <Image
          style={styles.image}
          source={{
            uri: "https://i.imgur.com/eQ5Fv26.png",
          }}
          contentFit="contain"
        />
        <Image
          style={styles.image2}
          source={{
            uri: "https://i.imgur.com/OcpoUw8.png",
          }}
          contentFit="contain"
        />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f8fb',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    separador:{
        backgroundColor: '#f9f9f9',
        height: 1,
        width: '90%',
        margin: 40,
    },
    image: {
        flex: 1,
        width: '50%',
        height: '10%',
        alignSelf: 'middle'
      },
      image2: {
        flex: 1,
        width: '100%',
        height: '10%',
        alignSelf: 'middle'
      },
});
    