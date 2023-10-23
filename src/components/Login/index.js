import React, {useState} from 'react'
import {logar, cadastrar, verificarErro} from './../../servicos/cadastroLogin'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'

export function Login( {navigation} ) {
    const [email, setEmail] = useState('')
    const [statusError, setStatusError] = useState('')

    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={require('../../../assets/login.png')}/>
            <Text>LOGIN</Text>
            <TextInput 
                label='Email'
                value={email}
                onChangeText={setEmail}
                mode='outlined'
                keyboardType='email-address'
                error={statusError == 'email'}
                style={estilos.input} />
        </View>
    )
}