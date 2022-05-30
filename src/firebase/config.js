import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage} from "firebase/storage"
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBkvjKlKjQp6w7y8ILo4ZTVnbOw-E3Hq94",
  authDomain: "luigi-rampino-drums.firebaseapp.com",
  projectId: "luigi-rampino-drums",
  storageBucket: "luigi-rampino-drums.appspot.com",
  messagingSenderId: "192589175561",
  appId: "1:192589175561:web:a9c270e2d5434f9ea991d8",
  measurementId: "G-7WRJ07DCSL"
}

// init firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const storage = getStorage()
const auth = getAuth()

export { db, storage, auth }