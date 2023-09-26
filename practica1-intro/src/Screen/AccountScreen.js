import { View, Text, Button } from 'react-native'
import React from 'react'

export default function AccountScreen(props) {
  const { navigation } = props
  console.log(props)

  const goToSettings=()=>{
    navigation.navigate('Settings')
  }
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button onPress={goToSettings} title='Ir a settings' />
    </View>
  )

}