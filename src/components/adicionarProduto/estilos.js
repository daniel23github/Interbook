import { StyleSheet, Dimensions } from "react-native"

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#38B6FF"
    },

    input: {
        height: 50,
        width: Dimensions.get('window').width - 40,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 50
    },

    textoCadastro: {
        fontWeight: "bold",
        backgroundColor: "#76CBFC",
        paddingHorizontal: 40,
        paddingVertical: 6,
        borderRadius: 20,
        color: "#0E8CD6",
        fontSize: 25,
        margin: 10
    },

    textoCadastroCadastrar: {
        fontWeight: "bold",
        backgroundColor: "#76CBFC",
        paddingHorizontal: 40,
        paddingVertical: 6,
        borderRadius: 20,
        color: "#0E8CD6",
        fontSize: 25,
        margin: 10
    },

    imagem: {
        width: "100%",
        height: 190,
        borderRadius: 5,
        marginVertical: 15,
    }
})
