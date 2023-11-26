import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Button } from 'react-native'
import { TextInput, HelperText, Snackbar, DataTable } from 'react-native-paper'
import { estilos } from './estilos'
import Icon from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import { auth } from './../../config/firebase'
import { coletarDadosUsuario } from './../../servicos/cadastroLogin'

export function Cabecalho({ navigation }) {

    const user = auth.currentUser
    const user_id = user.uid
    const [modalVisible, setModalVisible] = useState(false)
    const [data, setData] = useState({})
    const [pesquisa, setPesquisa] = useState('')

    async function pegarDados() {
        const dados = await coletarDadosUsuario(user_id)
        setData(dados)
    }

    useEffect(() => {
        pegarDados()
        
        
    }, [])

    function pesquisar() {
        
    }

    return (
        <View>
            <View style={estilos.navbar}>
                <View style={estilos.icones_navbar}>
                    <TouchableOpacity onPress={() => {setModalVisible(true)}}>
                        <Icon name="bars" size={30} color="#fff" style={estilos.icones}/>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() => {navigation.replace('Home')}}>
                            <Icon name="home" size={30} color="#fff" style = {estilos.icones}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.replace('Carrinho')}}>
                            <Icon name="shopping-bag" size={30} color="#fff" style = {estilos.icones}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput 
                    theme={{roundness: 50}}
                    style={estilos.input} underlineColor='transparent' placeholder='busque aqui seu produto' placeholderTextColor="rgba(0, 0, 0, 0.2)" 
                    right={
                        <TextInput.Icon
                            onPress={() => {
                                navigation.replace('pesquisa', pesquisa)
                                setPesquisa('')
                            }}
                            icon={'magnify'} color='#76CBFC'
                        />
                    }
                    value={pesquisa}
                    onChangeText={setPesquisa}
                />
            </View>
            <Modal
            isVisible={modalVisible}
            onBackdropPress={() => {setModalVisible(false)}}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            swipeDirection="right" 
            onSwipeComplete={() => setModalVisible(false)}
            style={estilos.modal}
            propagateSwipe={false}
            onSwipeMove={(gestureState) => {
                if (gestureState.dy !== 0 || gestureState.dx !== 0) {
                  return;
                }
              }}
        >
                    <View style={estilos.modalContent}>
                    <View style={estilos.containerBemvindo}>
                        <Icon name="user-circle-o" size={50} color="#fff" style = {estilos.icones}/>
                        <View style={estilos.containerTextoBemvindo}>
                            <Text style={estilos.textoBemvindo}>Bem Vindo!</Text>
                            <Text style={estilos.textoUsuario}>{data.nome}</Text>
                        </View>
                    </View>
                    <ScrollView style={estilos.scroll} keyboardShouldPersistTaps="handled" vertical>
                            <View style={estilos.buttonContainer}>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="user-circle-o" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Dados Pessoais</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="envelope" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Mensagens</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="dropbox" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Pedidos</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="credit-card" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Pagamento</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="phone" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Central de Atendimento</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="bell" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Notificações</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="smile-o" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Avalie</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="map-marker" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Endereços</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes} onPress={() => {navigation.replace('Favorito')}}>
                                        <Icon name="heart" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Favoritos</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={estilos.botoes}>
                                        <Icon name="user-o" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                        <Text style={estilos.textoBotoes}>Manual do usuário</Text>
                                    </TouchableOpacity>
                                    {
                                    user.email == 'd@gmail.com' && 
                                    <>
                                        <TouchableOpacity style={estilos.botoes} onPress={() => {navigation.navigate('adicionarProduto')}}>
                                            <Icon name="book" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                            <Text style={estilos.textoBotoes}>Adicionar Produto</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={estilos.botoes} onPress={() => {navigation.navigate('adicionarDestaque')}}>
                                            <Icon name="star" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                            <Text style={estilos.textoBotoes}>Adicionar Destaque</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={estilos.botoes} onPress={() => {navigation.navigate('adicionarCategoria')}}>
                                            <Icon name="plus" size={35} color="#fff" style = {estilos.iconesBotao}/>
                                            <Text style={estilos.textoBotoes}>Adicionar Categoria</Text>
                                        </TouchableOpacity>
                                    </>
                                    }
                                
                            </View>
                        </ScrollView>
                </View>
            </Modal>
        </View>
    )
}