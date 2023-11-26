import React, {useState} from 'react'
import { estilos } from './estilos'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export function Categoria({navigation, nome, id}) {
    return (
        <TouchableOpacity onPress={() => {navigation.replace('telaCategoria', {id:id, nome:nome})}}>
            <Text style={estilos.container}>{nome}</Text>
        </TouchableOpacity>
    )
}