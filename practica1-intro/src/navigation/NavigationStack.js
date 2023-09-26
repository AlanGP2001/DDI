import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../Screen/AccountScreen'
import SettingsScreen from '../Screen/SettingsScreen'
import Camara from '../Screen/Camara'

export default function NavigationStack() {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />    
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Camara" component={Camara} />
    </Stack.Navigator>
  )
}