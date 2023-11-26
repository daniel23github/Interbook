import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Produto } from './../Produto/index'
import { pegarProdutos, pegarProdutoTempoReal, pegarProdutosDoCarrinho } from './../../servicos/firestore'



export function Carrinho( {navigation} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const user = auth.currentUser
    async function pegarDados() {
        setRefreshing(true)
        try {
            const produtosPegos = await pegarProdutosDoCarrinho(user.uid)
            setProdutos(produtosPegos)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        
        
    }, [])

    return (
        <View style={estilos.container}>
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
        </View>
    )
}