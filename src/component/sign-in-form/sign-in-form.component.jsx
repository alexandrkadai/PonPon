import { useState, useContext } from "react";
import { signInWithGooglePopup,
         creatUserDocumentFromAuth,
         signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    "email": '', 
    "password": ''
}


const SignInForm = () =>{ 
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password} = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormField = () =>{
       setFormFields(defaultFormFields); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormField();
        } catch(error){
            if(error.code === "auth/wrong-password"){
                alert('Wrong Password for Your Email');
            }else if(error.code === "auth/user-not-found"){
                alert('Such User email dont Registered');
            }

        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value })
        console.log(value); 
};

const signInWithGoogle = async () =>{
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
}

    return (
        <div className="sign-up-container">
        <h2>Already have an account?</h2> 
        <span>Sign in with your email and password </span>
        <form onSubmit={handleSubmit}>

        
        <FormInput
        label="Email"
        type="email" required 
        onChange={handleChange} 
        name='email' value={email}
        />
        
        <FormInput
        label="Password"
        type="password" required 
        onChange={handleChange} 
        name='password' value={password}
        />
        
        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>

        </form>
        </div>
    )
}

export default SignInForm;