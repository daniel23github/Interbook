import React, {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import { Produto } from './../Produto/index'
import { pegarProdutoTempoRealCarrinho, pegarProdutosDoCarrinho } from './../../servicos/firestore'



export function Carrinho( {navigation} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [soma, setSoma] = useState(0)
    const user = auth.currentUser
    async function pegarDados() {
        setRefreshing(true)
        let s = 0
        try {
            const produtosPegos = await pegarProdutosDoCarrinho(user.uid)
            setProdutos(produtosPegos)
            for (let c = 0; c < produtosPegos.length; c++) {
                s = s + Number(produtosPegos[c].precoAtual)
                console.log(s)
            }
            setSoma(s)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        pegarProdutoTempoRealCarrinho(user.uid, setProdutos)
        
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Carrinho</Text>
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
            <View style={estilos.containerSoma}>
                <Text style={estilos.soma}>R$ {soma}</Text>
            </View>
        </View>
    )
}