import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

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
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);