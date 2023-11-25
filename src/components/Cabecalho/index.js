import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import Icon from 'react-native-vector-icons/FontAwesome'

export function Cabecalho() {
    return (
        <View>
            <View style={estilos.navbar}>
                <View style={estilos.icones_navbar}>
                    <Icon name="bars" size={'30px'} color="#fff" style={estilos.icones}/>
                    <Icon name="shopping-bag" size={'30px'} color="#fff" style = {estilos.icones}/>
                </View>
                <TextInput theme={{roundness: 50}}style={estilos.input} underlineColor='transparent' placeholder='busque aqui seu produto' placeholderTextColor="rgba(0, 0, 0, 0.2)" right={
                    <TextInput.Icon
                        icon={'magnify'} color='#76CBFC'
                    />
                }/>
            </View>
            <Image source={require('../../../src/imagens/banner.png')} style={estilos.banner}/>
        </View>
    )
}