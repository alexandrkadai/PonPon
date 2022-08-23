import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyOVCiHlCigwt674Lhnx2t3wHq79Eyj3c",
    authDomain: "ponpon-4cfa9.firebaseapp.com",
    projectId: "ponpon-4cfa9",
    storageBucket: "ponpon-4cfa9.appspot.com",
    messagingSenderId: "906111650498",
    appId: "1:906111650498:web:fbb0c109f563653560895b",
    measurementId: "G-YV8Z7P90Q3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const creatUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc( db, 'users', userAuth.uid );

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch(error){
            console.log('User not created', error.message);
        }
       
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => { 
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => { 
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener =  (callback) => {
     onAuthStateChanged(auth,callback);
  }