import React, {useState} from 'react'
import { estilos } from './estilos'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export function Produto({ navigation, informacao, precoAntigo, precoAtual, imagem }) {
    const desconto = ((Number(precoAntigo) - Number(precoAtual)) * 100) / Number(precoAntigo);
  
    const irParaTelaProduto = () => {
      navigation.navigate('telaProduto');
    };
  
    return (
      <TouchableOpacity style={estilos.container} onPress={irParaTelaProduto}>
        <View style={estilos.fundo}>
          <Image style={estilos.imagem} source={{ uri: imagem }} />
        </View>
        <View style={estilos.informacao}>
          <Text style={estilos.textoInformacao}>{informacao}</Text>
          <Text style={estilos.precoAntigo}>De: R$ {precoAntigo}</Text>
          <Text style={estilos.precoAtual}>R$: {precoAtual}</Text>
          <Text style={estilos.desconto}>({desconto}% de desconto)</Text>
        </View>
      </TouchableOpacity>
    );
  }