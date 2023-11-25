import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#38B6FF'

    },

    input: {
        height: 50,
        width: "320px",
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
        fontFamily: 'alatsi',
        fontweight: 'bolder',
        backgroundColor: '#76CBFC',
        paddingLeft: '90px',
        paddingRight: '90px ',
        paddingBottom: '6px',
        paddingTop: '6px',
        borderRadius: '20px',
        color: '#0E8CD6',
        fontSize: '45px',
        margin: '10px'

    },

    textoLoginEntrar: {
        fontFamily: 'alatsi',
        fontweight: 'bolder',
        backgroundColor: '#76CBFC',
        paddingLeft: '40px',
        paddingRight: '40px ',
        paddingBottom: '6px',
        paddingTop: '6px',
        borderRadius: '20px',
        color: '#0E8CD6',
        fontSize: '25px',
        margin: '10px'

    },

    textoLoginCadastrar: {
        color: '#D9D9D9'
    }
})