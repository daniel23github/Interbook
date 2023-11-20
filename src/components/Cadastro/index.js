import React, {useState} from 'react'
import {logar, cadastrar, verificarErro} from './../../servicos/cadastroLogin'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'

export function Cadastrar( {navigation} ) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [statusError, setStatusError] = useState('')

    return (
        <View style={estilos.container}>
            <Text style={estilos.textoCadastro}>CADASTRO</Text>
            <TextInput 
                label='Nome'
                value={nome}
                onChangeText={setNome}
                mode='outlined'
                error={statusError == 'nome'}
                style={estilos.input} />
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
                style={estilos.input} />
            <TextInput
                label="Confirmar Senha"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                mode="outlined"
                error={statusError == 'confirmaSenha'}
                secureTextEntry={secureMode}
                style={estilos.input} />
            <TouchableOpacity>
                <Text style={estilos.textoCadastroCadastrar} onPress={() => navigation.navigate('Login')}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}