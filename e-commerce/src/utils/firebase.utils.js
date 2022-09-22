import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //creates table in db with collectionKey which is string
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  //objectstoadd is the array of data
  objectsToAdd.forEach((obj) => {
    //for each obj create a document reference that points to a particular category within the db
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj); //create entry within db
  });

  await batch.commit();
  console.log('---done---');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(() => {}, {})

}

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  //.exists to see if it exists

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error message: ", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
