import { createUserWithEmailAndPassword, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db, app } from "../config/firebase"
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, query, onSnapshot, setDoc } from "firebase/firestore";

function verificarErro(error) {
    let mensagem = ''
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = 'Esse email já está em uso'
            break
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = 'Email inválido'
            break
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem = 'A senha precisa de no minimo 6 caracteres'
            break
        default:
            mensagem = 'Erro desconhecido'
    }
    return mensagem
}

export async function cadastrar(dados) {
    const resultado = await createUserWithEmailAndPassword(auth, dados.email, dados.senha)
    const nome = dados.nome
    const email = dados.email
        try {
            console.log('opa')
            await setDoc(doc(db, 'Users', resultado.user.uid), {nome, email})
            await setDoc(doc(db, 'Carrinhos', resultado.user.uid), {})
            await setDoc(doc(db, 'Favoritos', resultado.user.uid), {})
            return 'sucesso'
        }
        catch (error)  {
            return verificarErro(error)
        }
    
}

export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
            console.log(dadosDoUsuario)
            return "sucesso"
        })
        .catch((error) => {
            console.log(error)
            return "Erro ao logar"
        })
    return resultado
}

export async function coletarDadosUsuario(id) {
    const documento = doc(db, 'Users', id)
    const dados = await getDoc(documento)
    const data = dados.data()
    return data
}