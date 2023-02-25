import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb6lg1jBBlyQwfUVYMZdR9vU1LOt-xaTQ",
  authDomain: "instagramclone-d584d.firebaseapp.com",
  projectId: "instagramclone-d584d",
  storageBucket: "instagramclone-d584d.appspot.com",
  messagingSenderId: "616631667308",
  appId: "1:616631667308:web:65198edc721c049ac26649",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid))

    let data = {
        uid: user.uid,
        full_name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        ...dbUser.data()
    }
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response
  } catch (error) {
    toast.error(error.code);
  }
};

export const getUserInfo = async (usernameFunc) => {
  const username = await getDoc(doc(db, "usernames", usernameFunc))
  if (username.exists()) {
    return await (await getDoc(doc(db,"users",username.data().user_id))).data()
  }
  else {
    toast.error("Bu kullanıcı Bulunamadı!")
    throw new Error("Bu kullanıcı Bulunamadı!")
  }
}

export const register = async ({ email, password, full_name, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));

    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
    }
    
    else {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid,
        });
        await setDoc(doc(db, "users", response.user.uid), {
          full_name,
          username,
          followers: [],
          following: [],
          notifications: [],
          website: '',
          bio: '',
          phone_number: '',
          gender: '',
          post: 0
        });

        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });
        return response.user;
      }
    }
  } catch (error) {
    toast.error(error.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};
