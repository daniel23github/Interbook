import { StyleSheet, Dimensions } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    container: {
        marginTop: 130,
        backgroundColor: "white"
    },

    navbar: {
        backgroundColor: cor1,
        alignItems: "center"
    },

    icones_navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get('window').width,
        paddingHorizontal: 16,
    },

    icones: {
        margin: 10
    },

    input: {
        height: 40,
        width: "88%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 50,
        marginTop: 24, // Alterado para um valor que funcione melhor no mobile
        marginBottom: 12
    },

    banner: {
        width: "100%",
        height: Dimensions.get('window').height * 0.2,
        resizeMode: "cover" // Usar resizeMode para imagens no React Native
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
