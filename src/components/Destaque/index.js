import React, {useState} from 'react'
import { estilos } from './estilos'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export function Destaque({ navigation, id, imagem }) {
    return (
        <View style={estilos.container}>
            <TouchableOpacity onPress={() => {navigation.replace('telaProduto', id)}}>
                <Image style={estilos.imagem} source={{uri: imagem}}/>
            </TouchableOpacity>
        </View>
    )
}