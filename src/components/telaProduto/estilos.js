import { StyleSheet, Dimensions } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    container: {
        marginTop: 130,
        backgroundColor: "white"
    },

    imagem: {
        height: Dimensions.get("window").height * 0.7,
        width: Dimensions.get("window").width * 0.6,
        resizeMode: "cover",
        marginLeft: "10%"
    },

    icones: {
        margin: 10,
        marginRight: 10
    },

    containerImagem: {
        marginTop: 15,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerTexto: {
        margin: 10
    },

    textoInformacao: {
        color: cor1,
        fontSize: 18,
        fontWeight: "bold",
        margin: 6
    },

    precoAntigo: {
        color: "#AFAAAA",
        fontSize: 14,
        textDecorationLine: "line-through"
    },

    precoAtual: {
        color: "#0E8CD6",
        fontSize: 18,
        fontWeight: "bold"
    },

    desconto: {
        marginLeft: 8,
        color: cor1,
        fontSize: 14
    },

    containerEstrelas: {
        flexDirection: "row"
    },

    textoEstrela: {
        color: cor1,
        fontSize: 16,
        fontWeight: "bold"
    },

    estrela: {
        marginLeft: 5
    },

    containerComprar: {
        justifyContent: "center",
        alignItems: "center"
    },

    comprar: {
        backgroundColor: "#0E8CD6",
        padding: 10,
        borderRadius: 4,
        textAlign: "center",
        color: "white",
        width: "60%"
    },

    containerModal: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%"
    },

    textoModal: {
        color: "#0E8CD6"
    },

    botaoModal: {
        backgroundColor: cor1,
        padding: 10,
        borderRadius: 4,
        textAlign: "center",
        color: "white",
        width: "30%"
    }
})
