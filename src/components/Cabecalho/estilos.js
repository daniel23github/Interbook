import { StyleSheet, Dimensions } from "react-native"

const cor1 = "#38B6FF"

export const estilos = StyleSheet.create({
    navbar: {
        backgroundColor: cor1,
        alignItems: "center"
    },
    
    icones_navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '80%', // Ajuste da largura com base na tela
        paddingHorizontal: 10,
        marginHorizontal: 4
    },
    
    icones: {
        marginHorizontal: 10
    },
    
    input: {
        height: 40,
        width: "80%", // Ajuste para 88% da largura da tela
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 50,
        marginTop: "8%", // Ajuste para 8% da altura da tela
        marginBottom: 12
    },
    
    banner: {
        width: "100%",
        height: "70%", // Ajuste para 70% da altura da tela
        resizeMode: "cover"
    }
})
