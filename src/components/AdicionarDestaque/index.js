import React, {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import { ProdutoAdicionado } from './../ProdutoAdicionado/index'
import { pegarProdutos, pegarProdutoTempoReal } from './../../servicos/firestore'



export function AdicionarDestaque( {navigation} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const user = auth.currentUser
    async function pegarDados() {
        setRefreshing(true)
        try {
            const produtosPegos = await pegarProdutos()
            setProdutos(produtosPegos)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        pegarProdutoTempoReal(setProdutos)
        
        
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Adicionar aos destaques</Text>
            <View>  
            { produtos.length > 0 && (<FlatList
                        data={produtos}
                        renderItem={({ item }) => <ProdutoAdicionado id={item.id} navigation={navigation} informacao={item.informacao} precoAntigo={item['precoAntigo']} precoAtual={item['precoAtual']} imagem={item['url']}/>}
                        keyExtractor={item => item.id}
                        refreshing={refreshing}
                        onRefresh={pegarDados}
                    />)
                    }
                    
            </View>
        </View>
    )
}