import { View, Text, propTypes } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

export default function Saludar(props) {
    const {name, apellido } = props
   return (
    <View>
      <Text>Hola {name} {apellido} </Text>
    </View>
  )
}
// Saludar.defaultProps ={
//    name: 'Sin nombre',
//    apellido: 'Sin apellido'
//}
Saludar.PropTypes = {
    name: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired
}