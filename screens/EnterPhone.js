import { Icon } from "@rneui/themed";
import React from "react";

import { ImageBackground, Text, TextInput, View, Image, StyleSheet } from 'react-native'

function EnterPhone() {
    return (
          <View style={{flex: 1}} >
            <ImageBackground style={{flex: 1}} source={require('../assests/images/coffee.png')} resizeMode={'stretch'}>

              <View style={{justifyContent: 'center',  flex: 1}} >
                <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                  <Text style={{textAlign: 'left'}}>Enter your Number</Text>
                </View>
                <View style= {styles.EnterPhoneView}>
                  <View>
                  <Image source={require('../assests/images/am.png')} style={{ width: 34, height: 34, marginHorizontal: 12}}/>
                  </View>
                  <View>
                  <Icon name='caret-down-outline' type='ionicon'   />
                  </View>
                  <View>
                  <Text>+1 </Text>
                  </View>
                  <View>
                  <TextInput placeholder="Enter your phone number"  />
                  </View>
                  <View style={{backgroundColor: '#FF0A38', justifyContent: 'flex-end', }}>
                    <Icon name='arrow-forward-outline' type='ionicon' color={'white'}/>
                  </View>
                </View>
              </View>

            </ImageBackground>
            </View>

          

    );
}

export default EnterPhone;

const styles = StyleSheet.create({
  EnterPhoneView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#70707036',
    marginHorizontal: 16


  }
})