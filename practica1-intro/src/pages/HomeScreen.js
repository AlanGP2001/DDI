import { View, Text, } from 'react-native'
import React from 'react'
import Saludar from './components/Saludar'

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Saludar name="Jorgelio" Apellido="Olvera" />
      <Saludar name="Alfonso" Apellido="Garduño" />
      <Saludar name="Alexander" Apellido="Tinoco" />
    </View>
  )
  
}