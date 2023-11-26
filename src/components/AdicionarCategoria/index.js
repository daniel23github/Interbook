import React, {useState} from 'react'
import {logar, cadastrar, verificarErro} from '../../servicos/cadastroLogin'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { adicionarCategorias } from '../../servicos/firestore'
import * as ImagePicker from 'expo-image-picker'

export function AdicionarCategoria( {navigation} ) {
    const [nome, setNome] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)
    const [statusError, setStatusError] = useState('')

    function limpaCampos() {
        setNome('')
        navigation.replace('Home')
    }

    async function realizarCadastro() {
        if (nome == '') {
            setMensagemError('Não pode deixar o nome vazio!')
            setStatusError('nome')
        }
        else {
            const resultado = await adicionaCategoria()
            setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("Categoria adicionada com sucesso!")
                setTimeout(limpaCampos, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
            setMensagemError('')
            setStatusError('')
        }
    }

    async function adicionaCategoria() {
        const resultado = await adicionarCategorias(nome)
        return resultado
        
        
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.textoCadastro}>CATEGORIA</Text>
            <TextInput 
                label='Nome'
                value={nome}
                onChangeText={setNome}
                mode='outlined'
                error={statusError == 'nome'}
                style={estilos.input}
                theme={{roundness: 50}} />
            {statusError == 'nome' ? <HelperText type="error" visible={statusError == 'nome'}>
                    {mensagemError}
                </HelperText> : null}
            <TouchableOpacity onPress={realizarCadastro}>
                <Text style={estilos.textoCadastroCadastrar}>Adicionar</Text>
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
