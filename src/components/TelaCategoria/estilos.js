import { StyleSheet } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },

    texto: {
        color: cor1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    adicionar: {
        backgroundColor: "#0E8CD6",
        padding: 10,
        borderRadius: 4,
        textAlign: "center",
        color: "white",
        width: "60%",
        margin: 10,
    },

    containerBotao: {
        alignItems: 'center'
    }

})
