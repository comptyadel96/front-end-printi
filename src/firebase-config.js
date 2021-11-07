import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: "printi-84457.firebaseapp.com",

  projectId: "printi-84457",

  storageBucket: "printi-84457.appspot.com",

  messagingSenderId: "902660535543",

  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  measurementId: "G-S2DJLJ1L49",
}
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
