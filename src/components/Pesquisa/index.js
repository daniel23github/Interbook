import React, {useState, useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { estilos } from './estilos'
import { Produto } from './../Produto/index'
import { Buscar, BuscarTempoReal } from './../../servicos/firestore'



export function Pesquisa( {navigation, route} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function pegarDados() {
        setRefreshing(true)
        try {
            const produtosPegos = await Buscar(route?.params)
            console.log('foi')
            setProdutos(produtosPegos)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        BuscarTempoReal(route?.params, setProdutos)
        
    }, [])

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>{route?.params}</Text>
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