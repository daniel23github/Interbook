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
        width: '100%', // Ajuste da largura com base na tela
        paddingHorizontal: 10,
        marginHorizontal: 4
    },
    
    icones: {
        marginHorizontal: 10,
        marginTop: 10
    },
    
    input: {
        height: 40,
        width: "88%", // Ajuste para 88% da largura da tela
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 50,
        marginTop: 60, // Ajuste para 8% da altura da tela
        marginBottom: 12
    },

    modal: {
        margin: 0,
        justifyContent: 'flex-start',
        width: '100%'
    },

    modalContent: {
        backgroundColor: 'white',
        height: '100%',
        width: '60%',
        alignItems: 'center'
    },

    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    },

    containerBemvindo: {
        backgroundColor: cor1,
        flexDirection: 'row',
        height: 120,
        width: '100%',
        alignItems: 'center'
    },

    containerTextoBemvindo: {
        flex: 1,
        margin: 10,
        
    },

    textoBemvindo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27,
    },

    textoUsuario: {
        color: 'white',
        fontSize: 20
    },

    botoes: {
        backgroundColor: '#76CBFC',
        width: '90%',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },

    textoBotoes: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8

    },

    iconesBotao: {
        margin: 10
    },

    scroll: {
        width: '100%',
        height: '100%'
    }

})
