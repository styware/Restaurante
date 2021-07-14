import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4WJjJXUJb7k8lRf13CPYeV1XaAFWTgAU",
    authDomain: "restaurante-ca3d2.firebaseapp.com",
    projectId: "restaurante-ca3d2",
    storageBucket: "restaurante-ca3d2.appspot.com",
    messagingSenderId: "619676871648",
    appId: "1:619676871648:web:05613a38a0286ea47e9985"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)