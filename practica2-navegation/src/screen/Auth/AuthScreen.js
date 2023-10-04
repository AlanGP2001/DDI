import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';

import LoginForm from '../../components/Auth/Login/LoginForm';
import Register from '../../components/Auth/Register/Register';
import { styles } from './AuthScreen.styles';
import Pc from '../../assets/rick.png';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(!isLogin);
  }

  const showLogin = () => {
    setIsLogin(prenState => !prenState)
  }


  return (
    <View style={styles.cotainer}>
      <ImageBackground source={require('../../assets/fondo.png')} style={styles.fondo}>
      <Image style={styles.image} source={Pc} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        {isLogin ? <LoginForm cambioAuth = { cambioAuth } showLogin = { showLogin } /> : <Register cambioAuth = { cambioAuth } showLogin = { showLogin }/>}
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
