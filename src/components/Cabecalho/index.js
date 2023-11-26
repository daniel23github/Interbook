import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import Icon from 'react-native-vector-icons/FontAwesome'

export function Cabecalho({ navigation }) {
    
    return (
        <View>
            <View style={estilos.navbar}>
                <View style={estilos.icones_navbar}>
                    <Icon name="bars" size={'30px'} color="#fff" style={estilos.icones}/>
                    <View>
                        <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                            <Icon name="home" size={'30px'} color="#fff" style = {estilos.icones}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate('Carrinho', )}}>
                            <Icon name="shopping-bag" size={'30px'} color="#fff" style = {estilos.icones}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput theme={{roundness: 50}}style={estilos.input} underlineColor='transparent' placeholder='busque aqui seu produto' placeholderTextColor="rgba(0, 0, 0, 0.2)" right={
                    <TextInput.Icon
                        icon={'magnify'} color='#76CBFC'
                    />
                }/>
            </View>
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/interbook-bf146.appspot.com/o/imagens%2Fbanner.png?alt=media&token=78005485-199d-4032-b727-1d2a287f2fd1'}} style={estilos.banner}/>
        </View>
    )
}