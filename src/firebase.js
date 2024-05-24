// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, 
    collection,
     getFirestore } from "firebase/firestore";

import { EmailAuthProvider } from "firebase/auth/cordova";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDf2mhXtjEkAwyn94aIHzJRZmvIo54Ah_4",
  authDomain: "netflix-clone-ca8c5.firebaseapp.com",
  projectId: "netflix-clone-ca8c5",
  storageBucket: "netflix-clone-ca8c5.appspot.com",
  messagingSenderId: "722198034061",
  appId: "1:722198034061:web:6420dd9506b7cfd34ad4c4",
  measurementId: "G-B2XDNC4BX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db =getFirestore(app);

const signup = async (name, email, password) => {
  try {
  const res = await createUserWithEmailAndPassword(auth,email,password);

    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
   
  }
};

//Login function

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
};

//Logout function
const logout = () => {
  signOut(auth);
};

export { auth, db, login , signup, logout };
