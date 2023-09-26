import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Camara(props) {
  const { navigation } = props
  console.log(props)

  const goToSettings=()=>{
    navigation.navigate('Settings')
  }
  return (
    <View>
      <Text>Camara</Text>
      <Text>Camara</Text>
      <Text>Camara</Text>
      <Text>Camara</Text>
      <Text>Camara</Text>
      <Text>Camara</Text>
      <Text>Camara</Text>
      <Button onPress={goToSettings} title='Ir a settings' />
    </View>
  )

}