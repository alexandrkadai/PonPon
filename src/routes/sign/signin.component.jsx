import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
const SignIn = () => {

    const logWithGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return(
        <div>
        <h1> Sign In Page</h1>
        <button onClick={logWithGoogleUser}>Sign In With Google</button>
        </div>
);
};

export default SignIn;