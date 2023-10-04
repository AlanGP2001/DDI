import { View, Text, Button } from 'react-native'
import React from 'react'

import { useAuth } from "../hooks/useAuth";

export default function SettingScreen() {

  const { logout } = useAuth();

  const handlePress = () => {
    logout();
  };


  return (
    <View>
      <Text>SettingScreen</Text>
      <Button title="Cerrar Sesión" onPress={handlePress} style={{ backgroundColor: 'red', fontSize: 20 }} />
    </View>
  )
}