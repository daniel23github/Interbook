import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Categoria } from './../Categoria/index'
import { Destaque } from './../Destaque/index'
import { Produto } from './../Produto/index'
import { pegarProdutos, pegarProdutoTempoReal } from './../../servicos/firestore'



export function Home( {navigation} ) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const user = auth.currentUser
    const lista = ['Aventura', 'Romance', 'Suspense', 'Terror', 'Ficção']
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
            <View>
                <ScrollView horizontal>
                    <View style={estilos.categorias}>
                        {lista.map((name, index) => (<Categoria nome={name} key={index}/>))}
                    </View>
                </ScrollView>
            </View>
            <View style={estilos.containerDestaques}>
                <Text style={estilos.texto}>Destaques</Text>
                <ScrollView horizontal>
                    <View style={estilos.destaques}>
                        {lista.map((index) => (<Destaque key={index} />))}
                    </View>
                </ScrollView>
            </View>
            <View style={estilos.containerDestaques}>
                <Text style={estilos.texto}>Ofertas do Dia</Text>
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
            <TouchableOpacity onPress={() => {navigation.navigate('adicionarProduto')}}>
                <Text>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}