import { StyleSheet } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },

    banner: {
        width: "100%",
        height: 180, 
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
        fontSize: 18, 
    },
    
    destaques: {
        backgroundColor: cor1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontWeight: "bold",
        marginVertical: 6 
    },
})
