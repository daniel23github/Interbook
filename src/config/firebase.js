import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC3ETuwJ1TAOwHJJMDrHkCFh6gzdvl5xk8",
    authDomain: "interbook-bf146.firebaseapp.com",
    projectId: "interbook-bf146",
    storageBucket: "interbook-bf146.appspot.com",
    messagingSenderId: "936896154503",
    appId: "1:936896154503:web:2d6b572e7c88751eb5e122",
    measurementId: "G-44E2SZX4S2"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage }