import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdqM6Gkoyw7lg1sLy636YMCbIrVdWh58E",
    authDomain: "mern-app-46f88.firebaseapp.com",
    projectId: "mern-app-46f88",
    storageBucket: "mern-app-46f88.appspot.com",
    messagingSenderId: "314526914266",
    appId: "1:314526914266:web:d8fd04731f7376234b37e3"};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db