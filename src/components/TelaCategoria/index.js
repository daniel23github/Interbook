import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import { Produto } from './../Produto/index'
import { pegarProdutosCategoria, pegarProdutosCategoriaTempoReal } from './../../servicos/firestore'



export function TelaCategoria( {navigation, route} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const user = auth.currentUser
    async function pegarDados() {
        setRefreshing(true)
        try {
            const produtosPegos = await pegarProdutosCategoria(route?.params?.id)
            setProdutos(produtosPegos)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        pegarProdutosCategoriaTempoReal(route?.params, setProdutos)
        
    }, [])

    function redirecionar() {
        navigation.replace('adicionarParaCategoria', route?.params)
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>{route?.params?.nome}</Text>
            <View>  
                    { produtos.length > 0 && (<FlatList
                        data={produtos}
                        renderItem={({ item }) => <Produto id={item.id} navigation={navigation} informacao={item.informacao} precoAntigo={item['precoAntigo']} precoAtual={item['precoAtual']} imagem={item['url']}/>}
                        keyExtractor={item => item.id}
                        refreshing={refreshing}
                        onRefresh={pegarDados}
                    />)
                    }
                    
            </View>
            { user.email == 'd@gmail.com' &&
                <TouchableOpacity onPress={redirecionar} style={estilos.containerBotao}>
                    <Text style={estilos.adicionar}>Adicionar Livros</Text>
                </TouchableOpacity>
            }
        </View>
    )
}