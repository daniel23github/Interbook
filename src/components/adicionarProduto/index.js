import React, {useState} from 'react'
import {logar, cadastrar, verificarErro} from '../../servicos/cadastroLogin'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { salvarImagem, cadastrarProduto } from '../../servicos/firestore'
import * as ImagePicker from 'expo-image-picker'

export function AdicionarProduto( {navigation} ) {
    const [informacao, setInformacao] = useState('')
    const [precoAntigo, setPrecoAntigo] = useState('')
    const [precoAtual, setPrecoAtual] = useState('')
    const [estrelas, setEstrelas] = useState('')
    const [imagem, setImagem] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)
    const [statusError, setStatusError] = useState('')

    function limpaCampos() {
        setInformacao('')
        setPrecoAntigo('')
        setPrecoAtual('')
        setImagem('')
        navigation.navigate('Home')
    }

    async function realizarCadastro() {
        if (informacao == '') {
            setMensagemError('Não pode deixar o informacao vazio!')
            setStatusError('informacao')
        }

        else if (precoAntigo == '') {
            setMensagemError('Não pode deixar o precoAntigo vazio!')
            setStatusError('precoAntigo')
        }

        else if ( precoAtual == '') {
            setMensagemError('Não pode deixar a precoAtual vazia!')
            setStatusError('precoAtual')
        }

        else if ( imagem == '') {
            setMensagemError('Não pode deixar a imagem vazia!')
            setStatusError('imagem')
        }
        else if ( estrelas == 0) {
            setMensagemError('Não pode deixar a quantidade estrelas vazia!')
            setStatusError('estrelas')
        }
        else {
            const resultado = await adicionaImagem()
            setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("Produto cadastrado com sucesso!")
                setTimeout(limpaCampos, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
            setMensagemError('')
            setStatusError('')
        }
    }

    async function escolherImagem() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,   
            allowsEditing: true, 
            aspect: [4, 3], 
            quality: 0.2,
        });
        console.log(result);
        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    }

    async function adicionaImagem() {
        const url = await salvarImagem(imagem, informacao)
        const resultado = await cadastrarProduto({informacao, precoAntigo, precoAtual, url, estrelas})
        return resultado
        
        
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.textoCadastro}>CADASTRO</Text>
            <TextInput 
                label='informacao'
                value={informacao}
                onChangeText={setInformacao}
                mode='outlined'
                error={statusError == 'informacao'}
                style={estilos.input}
                theme={{roundness: 50}} />
            {statusError == 'informacao' ? <HelperText type="error" visible={statusError == 'informacao'}>
                    {mensagemError}
                </HelperText> : null}
            <TextInput 
                label='precoAntigo'
                value={precoAntigo}
                onChangeText={setPrecoAntigo}
                mode='outlined'
                error={statusError == 'precoAntigo'}
                style={estilos.input} 
                theme={{roundness: 50}} />
            {statusError == 'precoAntigo' ? <HelperText type="error" visible={statusError == 'precoAntigo'}>
                    {mensagemError}
                </HelperText> : null}
            <TextInput
                label="precoAtual"
                value={precoAtual}
                onChangeText={setPrecoAtual}
                mode="outlined"
                error={statusError == 'precoAtual'}
                style={estilos.input} 
                theme={{roundness: 50}} />
            {statusError == 'precoAtual' ? <HelperText type="error" visible={statusError == 'precoAtual'}>
                    {mensagemError}
                </HelperText> : null}
            <TextInput
                label="estrelas"
                value={estrelas}
                onChangeText={setEstrelas}
                mode="outlined"
                error={statusError == 'estrelas'}
                style={estilos.input} 
                theme={{roundness: 50}} />
            {statusError == 'estrelas' ? <HelperText type="error" visible={statusError == 'estrelas'}>
                    {mensagemError}
                </HelperText> : null}
            {statusError == 'imagem' ? <HelperText type="error" visible={statusError == 'imagem'}>
                    {mensagemError}
                </HelperText> : null}
                <HelperText type="error" visible={statusError == 'SenhaNaoConfere'}>
                    {mensagemError}
                </HelperText>
            <TouchableOpacity style={estilos.imagem}onPress={escolherImagem}>
                <Image style={estilos.imagem} source={imagem ? { uri: imagem } : {uri : 'https://firebasestorage.googleapis.com/v0/b/interbook-bf146.appspot.com/o/imagens%2Fupload.jpeg?alt=media&token=273b6035-2cbd-4d67-a1d2-fc207f4be56e'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={realizarCadastro}>
                <Text style={estilos.textoCadastroCadastrar}>Cadastrar</Text>
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
