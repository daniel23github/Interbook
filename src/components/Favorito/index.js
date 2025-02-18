import React, {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import { Produto } from './../Produto/index'
import { pegarProdutoTempoRealFavorito, pegarProdutosDoFavorito } from './../../servicos/firestore'



export function Favorito( {navigation} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const user = auth.currentUser
    async function pegarDados() {
        setRefreshing(true)
        try {
            const produtosPegos = await pegarProdutosDoFavorito(user.uid)
            setProdutos(produtosPegos)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        pegarProdutoTempoRealFavorito(user.uid, setProdutos)
        
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Favoritos</Text>
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