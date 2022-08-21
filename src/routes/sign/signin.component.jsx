import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm  from '../../component/sign-up/sign-up-form.component';
import {
        auth, 
        signInWithGooglePopup, 
        signInWithGoogleRedirect,
        creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    
    useEffect(() => {
        (async() => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await creatUserDocumentFromAuth(response.user);
        }
    })();
    }, [] );

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
        <SignUpForm/>
        </div>
);
};

export default SignIn;
