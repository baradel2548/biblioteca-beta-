import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
const appIcon = require('../assets/appIcon.png');
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#5653D4', flex: 1 }}>
        <Text
          style={{
            marginTop: 50,
            alignSelf: 'center',
            fontSize: 30,
            color: 'white',
            fontFamily: 'Rajdhani_600SemiBold',
          }}>
          Tela de Login
        </Text>
        <Image
          source={appIcon}
          style={{ width: 210, height: 230, alignSelf: 'center' }}
        />
        <TextInput
          placeholder={'digite seu email'}
          placeholderTextColor={'#DDDD'}
          style={{
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 30,
            marginTop: 40,
            textAlign: 'center',
            width: '90%',
            height: 40,
            alignSelf: 'center',
            color: '#DDDD',
          }}
        />
        <TextInput
          placeholder={'digite sua senha'}
          placeholderTextColor={'#DDDD'}
          style={{
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 30,
            marginTop: 40,
            textAlign: 'center',
            width: '90%',
            height: 40,
            alignSelf: 'center',
            color: '#DDDD',
          }}
        />
        <TouchableOpacity
          style={{
            width: '30%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F48D20',
            borderRadius: 15,
            alignSelf:"center",
            marginTop: 30
          }}>
          <Text
            style={{
              fontSize: 24,
              color: '#FFFFFF',
              fontFamily: 'Rajdhani_600SemiBold',
            }}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
