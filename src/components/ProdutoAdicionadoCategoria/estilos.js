import { StyleSheet, Dimensions } from "react-native"

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38B6FF",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: 6,
        flexWrap: "wrap"
    },

    fundo: {
        backgroundColor: "#fff",
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    informacao: {
        flex: 1
    },

    imagem: {
        backgroundColor: "#fff",
        height: "80%",
        width: "80%",
        borderRadius: 10,
        margin: 10
    },

    textoInformacao: {
        color: "white",
        fontSize: 16 // Ajuste o tamanho conforme necessário
    },

    precoAntigo: {
        color: "#AFAAAA",
        fontSize: 12,
        textDecorationLine: "line-through"
    },

    precoAtual: {
        color: "#0E8CD6",
        fontSize: 18, // Ajuste o tamanho conforme necessário
        fontWeight: "bold"
    },

    desconto: {
        marginLeft: 8,
        color: "white",
        fontSize: 10 // Ajuste o tamanho conforme necessário
    }
})
