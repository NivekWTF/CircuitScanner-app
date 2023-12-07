import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';

import CambiarCam from '../Icons/Cambiar-camara.png';
import Galeria from '../Icons/Gallery.png';
import centro from '../Icons/Camara.png';
import search from '../Icons/search.png';

export default function CameraScreen({navigation}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const flipCamera = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.uri);
        }
    };

    if (hasCameraPermission === null || hasGalleryPermission === null) {
        return <View />;
    }
    if (hasCameraPermission === false || hasGalleryPermission === false) {
        return <Text>No access to camera or gallery</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar hidden={false}
            backgroundColor='#f9f9f9'
        />
            <Camera style={styles.camera} type={cameraType}>
                {/* Elementos dentro del cuadro de la cámara */}

                {/* Botón para cambiar la cámara */}
            <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
                <Image source={CambiarCam} style={styles.buttonImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchButton} onPress={flipCamera}>
                <Image source={search} style={styles.buttonImageSearch} />
            </TouchableOpacity>

            {/* Botón para abrir la galería */}
            <TouchableOpacity style={styles.galleryButton} onPress={pickImage}>
                <Image source={Galeria} style={styles.buttonImageGallery} />
            </TouchableOpacity>

            {/* Botón central */}
            <TouchableOpacity style={styles.centralButton} >
                <Image source={centro} style={styles.buttonImageCircuit} />
            </TouchableOpacity>

            {/* Vista previa de la imagen seleccionada */}
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.imagePreview} />}
            
            </Camera>

        </View>
        </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BAFBB',
    alignItems: 'center',
    justifyContent: 'center',
},
camera: {
    width: 500, // Ajusta el ancho del cuadro de la cámara
    height: 800, // Ajusta la altura del cuadro de la cámara
    justifyContent: 'center',
    alignItems: 'center',
},
buttonContainer: {
  position: 'absolute',
  top: 10,
  right: 10,
},
centralButton: {
  position: 'absolute',
  bottom: 20,
  alignSelf: 'center', // Centra el botón en el eje horizontal
  width: 80, // Tamaño del botón
  height: 80, // Tamaño del botón
  borderRadius: 50, // Hace que el botón sea circular
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 50,
  backgroundColor: '#F9F9F9'
},

flipButton: {
  position: 'absolute',
  top: 50, // Ajusta según sea necesario
  right: 10, // Ajusta según sea necesario
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: '#1D90FE',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 50,
    opacity: 0.9,
},

searchButton: {
    position: 'absolute',
    top: 50, // Ajusta según sea necesario
    left: 65, // Ajusta según sea necesario
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#8BAFBB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
    opacity: 0.5,
  
  },
galleryButton: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  width: 60,
  height: 60,
  borderRadius: 50,
  backgroundColor: '#1D90FE',
  alignItems: 'center',
  justifyContent: 'center', 
  marginBottom: 20,
  marginRight: 50,
},
buttonImage: {
  width: '65%',
  height: '65%',
  resizeMode: 'contain',
},
buttonImageCircuit: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  buttonImageGallery: {
    width: '35%',
    height: '35%',
    resizeMode: 'contain',
  },

  buttonImageSearch: {
    width: '35%',
    height: '35%',
    resizeMode: 'contain',
  },
  

imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
},

});