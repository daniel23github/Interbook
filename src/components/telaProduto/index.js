import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, Button } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import Icon from 'react-native-vector-icons/FontAwesome'
import { pegarProdutos, pegarProdutoTempoReal, pegarProduto, adicionarProdutoNoCarrinho } from '../../servicos/firestore'
import { auth } from '../../config/firebase'

export function TelaProduto( {navigation, route} ) {
    const [data, setData] = useState({})
    const [estrelas, setEstrelas] = useState([])
    const [ visibleModal, setVisibleModal ] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const desconto = ((Number(data.precoAntigo) - Number(data.precoAtual)) * 100) / Number(data.precoAntigo)
    async function pegarDados() {
        const dados = await pegarProduto(route?.params)
        const listaEstrelas = []
        for (let c=0; c<Number(dados.estrelas);c++) {
            listaEstrelas.push(<Icon name="star" size={'25px'} color="#38B6FF" key={c} style={estilos.estrela} />)
        }

        setEstrelas(listaEstrelas)
        setData(dados)
        
    }
    function redirecionar() {
        navigation.navigate('Carrinho')
    }
    useEffect(() => {
        pegarDados()
        
        
    }, [])

    async function adicionarCarrinho() {
        setVisibleModal(false)
        const resultado = await adicionarProdutoNoCarrinho(route?.params, auth.currentUser, data.informacao)
        setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("Produto adicionado no Carrinho!")
                setTimeout(redirecionar, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
        

    }

    return (
        <View style={estilos.container}>
            <View style={estilos.containerImagem}>
                <Image style={estilos.imagem} source={{ uri: data.url }}/>
                <View>
                    <Icon name="heart" size={'30px'} color="#38B6FF" style={estilos.icones}/>
                </View>
            </View>
            <View style={estilos.containerTexto}>
                <Text style={estilos.textoInformacao}>{data.informacao}</Text>
                <View style={estilos.containerEstrelas}>
                    <Text style={estilos.textoEstrela}>
                        {data.estrelas} 
                    </Text>
                    {estrelas}
                </View>
                <Text style={estilos.precoAntigo}>De: R$ {data.precoAntigo}</Text>
                <Text style={estilos.precoAtual}>R$: {data.precoAtual}</Text>
                <Text style={estilos.desconto}>({desconto}% de desconto)</Text>
            </View>
            <TouchableOpacity style={estilos.containerComprar} onPress={() => {setVisibleModal(true)}}>
                <Text style={estilos.comprar}>COMPRAR AGORA</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
                        <Text style={estilos.textoModal}>Quer Adicionar ao Carrinho?</Text>
                        <View style={estilos.containerModal}>
                            <TouchableOpacity onPress={adicionarCarrinho}>
                                <Text style={estilos.botaoModal}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setVisibleModal(false)}}>
                                <Text style={estilos.botaoModal}>Não</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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