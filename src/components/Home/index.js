import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, HelperText, Snackbar } from 'react-native-paper'
import { estilos } from './estilos'
import { auth, db } from './../../config/firebase'
import { doc, getDoc } from "firebase/firestore";

export function Home( {navigation} ) {
    const [data, setData] = useState('')
    const user = auth.currentUser

    useEffect(() => {
        async function pegarDados() {
            const dados = await getDoc(doc(db, 'Users', user.uid))
            const data = dados.data()
            setData(data)

        }
        
        pegarDados()
        console.log(data)
    }, [])

    return (
        <View>
            <Text>{data.nome}</Text>
            <Text></Text>
        </View>
    )
}