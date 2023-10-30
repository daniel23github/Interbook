import React, {useState} from 'react'
import {logar, cadastrar, verificarErro} from './../../servicos/cadastroLogin'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'

export function Login( {navigation} ) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [statusError, setStatusError] = useState('')
    const [secureMode, setSecureMode] = useState(true)

    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={require('../../../assets/login.png')}/>
            <Text style={estilos.textoLogin}>LOGIN</Text>
            <TextInput 
                label='Email'
                value={email}
                onChangeText={setEmail}
                mode='outlined'
                keyboardType='email-address'
                error={statusError == 'email'}
                style={estilos.input} />
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry={secureMode}
                right={
                    <TextInput.Icon
                        icon={secureMode ? 'eye-off' : 'eye'}
                        onPress={() => setSecureMode(!secureMode)}
                    />
                }
                style={estilos.input} />
        </View>
    )
}