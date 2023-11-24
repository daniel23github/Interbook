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
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)
    const [statusError, setStatusError] = useState('')

    function limpaCampos() {
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
        setNome('')
        navigation.navigate('Login')
    }
    async function realizarCadastro() {
        if (nome == '') {
            setMensagemError('Não pode deixar o nome vazio!')
            setStatusError('nome')
        }

        else if (email == '') {
            setMensagemError('Não pode deixar o email vazio!')
            setStatusError('email')
        }

        else if ( senha == '') {
            setMensagemError('Não pode deixar a senha vazia!')
            setStatusError('senha')
        }

        else if ( confirmaSenha == '') {
            setMensagemError('Não pode deixar a senha vazia!')
            setStatusError('confirmaSenha')
        }

        else if (senha != confirmaSenha) {
            setMensagemError('Senhas não coincidem!')
            setStatusError('SenhaNaoConfere')

        }
        else {
            const resultado = await cadastrar({nome, senha, email })
            setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("E-mail cadastrado com sucesso!")
                setTimeout(limpaCampos, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
            setMensagemError('')
            setStatusError('')
        }
    }

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
            {statusError == 'nome' ? <HelperText type="error" visible={statusError == 'nome'}>
                    {mensagemError}
                </HelperText> : null}
            <TextInput 
                label='Email'
                value={email}
                onChangeText={setEmail}
                mode='outlined'
                keyboardType='email-address'
                error={statusError == 'email'}
                style={estilos.input} />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                    {mensagemError}
                </HelperText> : null}
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry
                style={estilos.input} />
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                    {mensagemError}
                </HelperText> : null}
            <TextInput
                label="Confirmar Senha"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                mode="outlined"
                error={statusError == 'confirmaSenha'}
                secureTextEntry
                style={estilos.input} />
            {statusError == 'confirmaSenha' ? <HelperText type="error" visible={statusError == 'confirmaSenha'}>
                    {mensagemError}
                </HelperText> : null}
                <HelperText type="error" visible={statusError == 'SenhaNaoConfere'}>
                    {mensagemError}
                </HelperText>
            <TouchableOpacity>
                <Text style={estilos.textoCadastroCadastrar} onPress={realizarCadastro}>Cadastrar</Text>
            </TouchableOpacity>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                    action={{
                        label: 'OK',
                        onPress: () => {
                            setStatusSnakbar(false)
                        },
                    }}>
                    {mensagemSnakbar}
                </Snackbar>
        </View>
    )
}