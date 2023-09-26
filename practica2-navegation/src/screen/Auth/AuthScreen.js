import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native'

import LoginForm from '../../components/Auth/Login/LoginForm'
import Register from '../../components/Auth/Register/Register'
import { styles } from './AuthScreen.styles';
import Pc from '../../assets/html.png';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState();

  return (
    <View style={styles.cotainer}>
      <Image style={styles.image} source={Pc} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        {isLogin ? <LoginForm /> : <Register />}
      </KeyboardAvoidingView>
    </View>
  )
}
