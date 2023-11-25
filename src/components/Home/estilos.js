import { StyleSheet } from 'react-native'

const cor1 = '#38B6FF'

export const estilos = StyleSheet.create({
    container: {
        marginTop: '100px'
    },
    
    navbar: {
        backgroundColor: cor1,
        alignItems: 'center'
    },

    icones_navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100vw'

    },

    icones: {
        margin: '10px'

    },

    input: {
        height: 40,
        width: "88%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 50,
        marginTop: '8vh',
        marginBottom: '12px'
    },

    banner: {
        width: '100%',
        height: '20%',
        backgroundSize: 'cover'
    },

    categorias: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        display: 'flex'

    },

    containerDestaques: {
        display: 'flex',
        width: '90vw',
        flexDirection: 'column',
        marginLeft: '5vw',
        marginRight: '5vw'
    },

    texto: {
        color: "#0E8CD6",
        fontSize: '1.2em',
        fontFamily: 'alatsi'
    },
    
    destaques: {
        backgroundColor: cor1,
        borderRadius: '10px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontWeight: 'bolder',
        margin: '6px'
    },
})