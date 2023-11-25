import React, {useState} from 'react'
import { estilos } from './estilos'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export function Categoria(props) {
    return (
        <Text style={estilos.container}>{props.nome}</Text>
    )
}