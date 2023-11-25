import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from './src/components/Login/index'
import { Cadastrar } from './src/components/Cadastro/index'
import { Home } from './src/components/Home/index'
import { adicionarProduto } from './src/components/adicionarProduto/index'
import { Cabecalho } from './src/components/Cabecalho/index'
import { telaProduto } from './src/components/telaProduto/index'

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ header: (props) => <Cabecalho {...props} /> }} 
                />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ headerShown: false }} />
                <Stack.Screen name='adicionarProduto' component={adicionarProduto} options={{ headerShown: false }} />
                <Stack.Screen name='telaProduto' component={telaProduto} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}