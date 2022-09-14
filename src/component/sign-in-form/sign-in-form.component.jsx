import { useState} from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { Button_Types_Classes } from "../button/button.component";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import { SignUpContainerDiv, ButtonsContainerDiv } from './sign-in-form.styles';

const defaultFormFields = {
    "email": '', 
    "password": ''
};

const SignInForm = () => { 
    const [formFields, setFormFields] = useState(defaultFormFields);
    const dispatch = useDispatch();
    const { email, password} = formFields;
    const resetFormField = () =>{
       setFormFields(defaultFormFields); 
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        dispatch(emailSignInStart(email, password));           
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
    dispatch(googleSignInStart);
};

    return (
        <SignUpContainerDiv>
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
        
        <ButtonsContainerDiv>
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonType={Button_Types_Classes.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </ButtonsContainerDiv>

        </form>
        </SignUpContainerDiv>
    )
};

export default SignInForm;