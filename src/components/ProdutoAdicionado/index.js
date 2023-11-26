import React, {useState} from 'react'
import { estilos } from './estilos'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { adicionarProdutoDestaque } from '../../servicos/firestore';

export function ProdutoAdicionado({ id, navigation, informacao, precoAntigo, precoAtual, imagem }) {
    const desconto = ((Number(precoAntigo) - Number(precoAtual)) * 100) / Number(precoAntigo)
  
    async function adicionar() {
      await adicionarProdutoDestaque(id)
      navigation.replace('Home')
    }
  
    return (
      <TouchableOpacity style={estilos.container} onPress={adicionar}>
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