import React from "react";
import {  ImageBackground,
    View,
    StyleSheet, Button, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


function Foodly({navigation}) {
    function pressHandler() {
        navigation.navigate('GetStarted');
    }
    return (
        <LinearGradient colors={['#FFD20D', '#FF7A20', '#FF2133']} style={styles.screen}>

        <View style={styles.screen}>
          
            <ImageBackground source={require('../assests/images/background.png')} style={styles.screen} resizeMode={'stretch'} imageStyle={{opacity: 0.42}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
              <Image source={require('../assests/images/logo.png')}  />
              <View style={styles.bttContainer}>
              <Button title="Press ME" onPress={pressHandler} />
              </View>
            </View>
            </ImageBackground>
         
          
        </View>
        </LinearGradient>
    );
}

export default Foodly;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bttContainer: {
        marginTop: 15
    }
        

});