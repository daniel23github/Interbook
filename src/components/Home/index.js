import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { auth, db } from './../../config/firebase'
import { doc, getDoc } from "firebase/firestore";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Categoria } from './../Categoria/index'
import { Destaque } from './../Destaque/index'


export function Home( {navigation} ) {
    const [data, setData] = useState('')
    const user = auth.currentUser
    const lista = ['Aventura', 'Romance', 'Suspense']

    useEffect(() => {
        async function pegarDados() {
            const dados = await getDoc(doc(db, 'Users', user.uid))
            const data = dados.data()
            setData(data)

        }
        
        pegarDados()
    }, [])

    return (
        <View>
            <View style={estilos.navbar}>
                <View style={estilos.icones_navbar}>
                    <Icon name="bars" size={'30px'} color="#fff" style={estilos.icones}/>
                    <Icon name="shopping-bag" size={'30px'} color="#fff" style = {estilos.icones}/>
                </View>
                <TextInput theme={{roundness: 50}}style={estilos.input} underlineColor='transparent' placeholder='busque aqui seu produto' placeholderTextColor="rgba(0, 0, 0, 0.2)" right={
                    <TextInput.Icon
                        icon={'magnify'} color='#76CBFC'
                    />
                }/>
            </View>
            <Image source={require('../../../src/imagens/banner.png')} style={estilos.banner}/>
            <View style={estilos.categorias}>
                {lista.map((name, index) => (<Categoria nome={name}/>))}
            </View>
            <View style={estilos.containerDestaques}>
                <Text style={estilos.texto}>Destaques</Text>
                <View style={estilos.destaques}>
                {lista.map(() => (<Destaque />))}
                </View>
            </View>
        </View>
    )
}