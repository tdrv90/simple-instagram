import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUh1Grl29PVaX9M2JTTG5rinD2hxAzkmg",
    authDomain: "simple-instagram-4f24f.firebaseapp.com",
    databaseURL: "https://simple-instagram-4f24f.firebaseio.com",
    projectId: "simple-instagram-4f24f",
    storageBucket: "simple-instagram-4f24f.appspot.com",
    messagingSenderId: "859560360298",
    appId: "1:859560360298:web:e875cf5269e2aec1038d13"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }