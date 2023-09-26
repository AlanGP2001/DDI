import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import { styles } from './Register.styles';
import { globalStyles } from '../../../../styles';


export default function Register() {
  return (
    <View>
        <TextInput 
            label="Correo electronico"
            style={globalStyles.form.input}
            autoCapitalize='none'

        />
         <TextInput 
            label="Nombre de usuario"
            style={globalStyles.form.input}
            secureTextEntry

        />
         <TextInput 
            label="Contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            secureTextEntry

        />

        <Button mode="contained" style={globalStyles.form.buttonSubmit}> Registrarse </Button>
        <Button mode="text"      style={globalStyles.form.buttonText}> Iniciar sesión </Button>
    </View>
  )
}