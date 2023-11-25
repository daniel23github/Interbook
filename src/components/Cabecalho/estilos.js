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
        marginBottom: '12px'
    },

    banner: {
        width: '100%',
        height: '70%',
        backgroundSize: 'cover'
    },

})