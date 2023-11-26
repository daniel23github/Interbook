import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from './src/components/Login/index'
import { Cadastrar } from './src/components/Cadastro/index'
import { Home } from './src/components/Home/index'
import { AdicionarProduto } from './src/components/AdicionarProduto/index'
import { Cabecalho } from './src/components/Cabecalho/index'
import { TelaProduto } from './src/components/TelaProduto/index'
import { Carrinho } from './src/components/Carrinho/index'

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ header: (props) => <Cabecalho {...props} /> }} 
                />
                <Stack.Screen name='adicionarProduto' component={AdicionarProduto} options={{ headerShown: false }} />
                <Stack.Screen name='telaProduto' component={TelaProduto} options={{ header: (props) => <Cabecalho {...props} /> }} />
                <Stack.Screen name='Carrinho' component={Carrinho} options={{ header: (props) => <Cabecalho {...props} /> }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}