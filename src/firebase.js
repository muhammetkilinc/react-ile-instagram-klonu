import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast'
import { userHandle } from "./utils";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb6lg1jBBlyQwfUVYMZdR9vU1LOt-xaTQ",
  authDomain: "instagramclone-d584d.firebaseapp.com",
  projectId: "instagramclone-d584d",
  storageBucket: "instagramclone-d584d.appspot.com",
  messagingSenderId: "616631667308",
  appId: "1:616631667308:web:65198edc721c049ac26649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, user => {
        userHandle(user || false)
})

export const login = async (email, password) => {
    try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    //
    } catch (error) {
        toast.error(error.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        toast.error(error.code)
    }
}