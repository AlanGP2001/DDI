import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
  const { navigation } = props
  console.log(props)

  const goToCamara=()=>{
    navigation.navigate('Camara')
  }
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button onPress={goToCamara} title='Ir a Camara' />
    </View>
  )
}