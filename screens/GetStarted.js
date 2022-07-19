import React, { useLayoutEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Pressable, Button } from 'react-native';
import { Icon } from "@rneui/themed";




function GetStarted({navigation}) {

    function startHandler() {
              navigation.navigate('EnterPhone')
    }
   
    return(
           <View style={styles.screen}>
            <ImageBackground source={require('../assests/images/start.png')}  style={styles.screen}
             resizeMode={'stretch'}>
                
                       <View style={{alignItems: 'flex-end', margin: 10  }} >
                         <Pressable android_ripple={{color: 'white'}} >
                            <View style={{backgroundColor: '#707070', borderRadius: 18, elevation: 4, paddingLeft: 30, paddingRight: 30, paddingTop: 10,
                            paddingBottom: 10, borderColor: 'black', opacity: 0.1
                         }}>
                            <Text style={{fontSize: 14, color: 'black'}}>Skip</Text>
                            </View>
                         </Pressable>
                       </View>
                
                <View style= {styles.titleContainer}>
                    <Text style={styles.title}>Get Started</Text>
                </View>
                <View style={{borderRadius: 16, overflow: 'hidden'}}  >
                    <Pressable onPress={startHandler} android_ripple={{color: 'white'}} style={styles.outerContainer}>
                        <View style={styles.btt} >
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.bttTitle}>Get Started</Text>
                            </View>
                            <View>
                            <Icon  name="chevron-forward-outline"
        type='ionicon'
        color='#FFFFFF' /> 
        </View>
                        </View>
                    </Pressable>
                </View>
                  
            </ImageBackground>

           </View>

    );
}
export default GetStarted;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
       
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 39,
        color: 'black'

    },
    outerContainer: {
        backgroundColor: '#FF0A38',
        padding: 16,
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 16,
        overflow: 'hidden'
      


    },
    outerRipple: {
          overflow: 'hidden',
          borderRadius: 16,
    },
    bttTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        

    },
    btt: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
  
       
        
        
    }


});