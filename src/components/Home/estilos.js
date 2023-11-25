import { StyleSheet } from 'react-native'

const cor1 = '#38B6FF'

export const estilos = StyleSheet.create({
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
        marginBottom: '8px'
    },

    banner: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover'
    },

    categorias: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'

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
        fontFamily: 'Alatsi'
    },
    
    destaques: {
        backgroundColor: cor1,
        width: '90vw',
        borderRadius: '10px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        fontWeight: 'bolder',
        margin: '6px'
    }
})