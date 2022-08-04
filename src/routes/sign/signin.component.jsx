import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
        auth, 
        signInWithGooglePopup, 
        signInWithGoogleRedirect,
        creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
    }, [] )
    const logWithGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    }
    const logWithGoogleRedirectUser = async () =>{
        const { user } = await signInWithGoogleRedirect();
        
    }
    return(
        <div>
        <h1> Sign In Page</h1>
        <button onClick={logWithGoogleUser}>Sign In With Google</button>
        <button onClick={logWithGoogleRedirectUser}>Sign In With Google Redirect</button>
        </div>
);
};

export default SignIn;