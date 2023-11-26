import { StyleSheet, Dimensions } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexWrap: 'wrap'
    },

    imagem: {
        height: 360,
        width: 360,
        resizeMode: "cover",
        marginLeft: "5%",
        marginRight: "5%",
    },

    icones: {
        margin: 10,
        marginRight: 10,
        marginLeft: "10%",
    },

    containerImagem: {
        height: 400,
        marginTop: 15,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: 'wrap'
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
        width: "60%",
        margin: 10
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
        width: 100,
        margin: 10
    },

    viewModal1: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#00000080',
    },

    viewModal2: {
        backgroundColor: '#fff', 
        padding: 20, 
        borderRadius: 10, 
        width: '80%', 
        alignItems: 'center'
    }
})
