import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyBX2nkIZr76FOEjTqyncfqfcu9q_x0Ly0U",
    authDomain: "danielfal513.firebaseapp.com",
    projectId: "danielfal513",
    storageBucket: "danielfal513.appspot.com",
    messagingSenderId: "866872135206",
    appId: "1:866872135206:web:526b514f9f2478b560a0e7",
    measurementId: "G-53JD7J5RR7"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)

export { app, auth }