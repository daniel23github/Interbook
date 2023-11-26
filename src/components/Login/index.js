import React, {useState} from 'react'
import {logar, cadastrar, verificarErro} from './../../servicos/cadastroLogin'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'

export function Login( {navigation} ) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secureMode, setSecureMode] = useState(true)
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)


    async function fazerLogin() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
            setEmail('')
            setSenha('')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
            setSenha('')
        } else {
            setMensagemError('')
            setStatusError('')
            const resultado = await logar(email, senha)
            if (resultado == 'sucesso') {
                navigation.replace('Home')
                setEmail('')
                setSenha('')
            } else {
                setStatusSnakbar(true)
                }
            setMensagemSnakbar("E-mail ou senha inválida")
            console.log(resultado)
        }
        
    }

    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/interbook-bf146.appspot.com/o/imagens%2FLogin.png?alt=media&token=6d9353cc-b85c-4107-80e5-740c34db4ad3'}}/>
            <Text style={estilos.textoLogin}>LOGIN</Text>
            <TextInput 
                label='Email'
                value={email}
                onChangeText={setEmail}
                mode='outlined'
                keyboardType='email-address'
                error={statusError == 'email'}
                style={estilos.input} 
                theme={{roundness: 50}} />
                {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                    {mensagemError}
                </HelperText> : null}
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
                style={estilos.input} 
                theme={{roundness: 50}} />
                {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                    {mensagemError}
                </HelperText> : null}
            <TouchableOpacity onPress={fazerLogin}>
                <Text style={estilos.textoLoginEntrar}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={estilos.textoLoginCadastrar} onPress={() => {navigation.navigate('Cadastrar')}}>Cadastre-se</Text>
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