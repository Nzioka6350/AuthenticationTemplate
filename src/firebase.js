// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrfku7d2VBSW-26jn4yFr2HrkU4TRioq0",
  authDomain: "authenticator-8acc5.firebaseapp.com",
  projectId: "authenticator-8acc5",
  storageBucket: "authenticator-8acc5.firebasestorage.app",
  messagingSenderId: "655735147335",
  appId: "1:655735147335:web:18a2793686b2ec27fe9a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

//Add user to the database


const signin = async() => {
  await signInWithEmailAndPassword(auth, email, password);
}