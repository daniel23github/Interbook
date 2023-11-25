import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#38B6FF',
        borderRadius: '10px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontWeight: 'bolder',
        margin: '6px',
        flexWrap: 'wrap'

    },

    fundo: {
        backgroundColor: '#fff',
        height: '20vh',
        width: '22vh',
        borderRadius: '10px',
        margin: '10px',
        justifyContent: 'center',
        textAlign: 'center'
    },

    informacao: {
        flex: 1,
    },

    imagem: {
        backgroundColor: '#fff',
        height: '18vh',
        width: '18vh',
        backgroundSize: 'cover',
        borderRadius: '10px',
        margin: '10px'
    },

    textoInformacao: {
        color: 'white',
        fontSize: '0.8em'
    },

    precoAntigo: {
        color: '#AFAAAA',
        fontSize: '0.6em',
        textDecorationLine: 'line-through'
    },

    precoAtual: {
        color: '#0E8CD6',
        fontSize: '1em',
        fontWeight: 'bold'
    },

    desconto: {
        marginLeft: '8px',
        color: 'white',
        fontSize: '0.5em'
    }
})