import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9PU7cBkB_KuU1I4Wng7e4H0E-EsKCXnk",
  authDomain: "clothing-db-d8525.firebaseapp.com",
  projectId: "clothing-db-d8525",
  storageBucket: "clothing-db-d8525.appspot.com",
  messagingSenderId: "340446354088",
  appId: "1:340446354088:web:e04c8bcf0e050acc5ec09d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Provider

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userDocRef;
};
