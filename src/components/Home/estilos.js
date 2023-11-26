import { StyleSheet, Dimensions } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },

    banner: {
        width: "100%",
        height: 180, // Ajuste para 70% da altura da tela
        resizeMode: "cover"
    },

    categorias: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    containerDestaques: {
        flexDirection: "column",
        paddingHorizontal: 16,
    },

    texto: {
        color: "#0E8CD6",
        fontSize: 18, // Definir um tamanho de fonte em pontos
    },
    
    destaques: {
        backgroundColor: cor1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontWeight: "bold", // A propriedade correta é 'bold', não 'bolder'
        marginVertical: 6 // Alterado para um valor vertical para dar espaço entre os destaques
    },
})
