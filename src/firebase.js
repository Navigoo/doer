import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDEUBzeZNdDei2I-DlmHubjawYuOg0t3s8",
  authDomain: "doer-development.firebaseapp.com",
  projectId: "doer-development",
  storageBucket: "doer-development.appspot.com",
  messagingSenderId: "1049089256278",
  appId: "1:1049089256278:web:e7b4246766f6e011cf84f7"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
