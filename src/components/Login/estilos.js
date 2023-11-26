import {StyleSheet} from "react-native"

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#38B6FF"

    },

    input: {
        height: 50,
        width: 320,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 50
    },

    imagem: {
        width: 150,
        height: 150
    },

    textoLogin: {
        fontWeight: "bold",
        backgroundColor: "#76CBFC",
        paddingLeft: 90,
        paddingRight: 90,
        paddingBottom: 6,
        paddingTop: 6,
        borderRadius: 20,
        color: "#0E8CD6",
        fontSize: 45,
        margin: 10

    },

    textoLoginEntrar: {
        fontWeight: 'bold',
        backgroundColor: "#76CBFC",
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 6,
        paddingTop: 6,
        borderRadius: 20,
        color: "#0E8CD6",
        fontSize: 25,
        margin: 10

    },

    textoLoginCadastrar: {
        color: "#D9D9D9"
    }
})