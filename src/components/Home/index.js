import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { auth } from './../../config/firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Categoria } from './../Categoria/index'
import { Destaque } from './../Destaque/index'
import { Produto } from './../Produto/index'
import { pegarProdutos, pegarProdutoTempoReal, pegarProdutosDestaque, pegarProdutoTempoRealDestaque, pegarCategorias } from './../../servicos/firestore'



export function Home( {navigation} ) {
    const [produtos, setProdutos] = useState([])
    const [produtosDestaque, setProdutosDestaque] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [categorias, setCategorias] = useState([])
    const user = auth.currentUser
    async function pegarDados() {
        setRefreshing(true)
        try {
            const produtosPegos = await pegarProdutos()
            const produtosPegosDestaque = await pegarProdutosDestaque()
            const categoriasPegas = await pegarCategorias() 
            setProdutos(produtosPegos)
            setProdutosDestaque(produtosPegosDestaque)
            setCategorias(categoriasPegas)

        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
        setRefreshing(false)

    }
    useEffect(() => {
        pegarDados()
        pegarProdutoTempoReal(setProdutos)
        pegarProdutoTempoRealDestaque(setProdutosDestaque)
        
        
    }, [])
    console.log(categorias)
    return (
        <View style={estilos.container}>
            <ScrollView>
                <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/interbook-bf146.appspot.com/o/imagens%2Fbanner.png?alt=media&token=78005485-199d-4032-b727-1d2a287f2fd1'}} style={estilos.banner}/>
                <View>
                    <ScrollView horizontal>
                        <View style={estilos.categorias}>
                        {
                            categorias.length > 0 && (<FlatList
                            data={categorias}
                            horizontal={true}
                            renderItem={({ item }) => <Categoria id={item.id} navigation={navigation} nome={item.nome}/>}
                            keyExtractor={item => item.id}
                            refreshing={refreshing}
                            onRefresh={pegarDados}
                            nestedScrollEnabled={false}
                            />)
                        }
                        </View>
                    </ScrollView>
                </View>
                <View style={estilos.containerDestaques}>
                    <Text style={estilos.texto}>Destaques</Text>
                    <ScrollView horizontal>
                        <View style={estilos.destaques}>
                        {
                            produtosDestaque.length > 0 && (<FlatList
                            data={produtosDestaque}
                            horizontal={true}
                            renderItem={({ item }) => <Destaque id={item.id} navigation={navigation} imagem={item['url']}/>}
                            keyExtractor={item => item.id}
                            refreshing={refreshing}
                            onRefresh={pegarDados}
                            nestedScrollEnabled={false}
                            />)
                        }
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
                            nestedScrollEnabled={false}
                        />)
                        }
                
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}