import { signInWithGooglePopup, creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
const SignIn = () => {

    const logWithGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    }
    return(
        <div>
        <h1> Sign In Page</h1>
        <button onClick={logWithGoogleUser}>Sign In With Google</button>
        </div>
);
};

export default SignIn;