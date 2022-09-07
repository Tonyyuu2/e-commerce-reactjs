import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsCKaMHt86PLHtSpJKTiIWlDvmoiuGCvw",
  authDomain: "new-ecommerce-67de6.firebaseapp.com",
  projectId: "new-ecommerce-67de6",
  storageBucket: "new-ecommerce-67de6.appspot.com",
  messagingSenderId: "522457829959",
  appId: "1:522457829959:web:65e3842d156f1dac7cd762",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup =  () => signInWithPopup(auth, provider)

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log('userDocRef :', userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log('userSnapshot :', userSnapshot); //.exists to see if it exists

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } 
    catch (error) {
      console.log('error message: ', error.message);
    }
  }
}