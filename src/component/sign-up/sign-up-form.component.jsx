import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { signUpStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import {SignUpContainerDiv} from './sign-up-form.styles';

const defaultFormFields = {
    "displayName": '',
    "email": '', 
    "password": '',
    "confirmPassword": ''
}


const SignUpForm = () =>{ 
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;

    const dispatch = useDispatch();

    const resetFormField = () =>{
       setFormFields(defaultFormFields); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(password !== confirmPassword) { 
            alert("pasword doesnt match")
            return;   
        }
        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormField();
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('User with such email already Exist');
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value })
        console.log(value); 
};

    return (
        <SignUpContainerDiv>
        <h2>Dont have an account?</h2> 
        <span>Sign up with your email and password </span>
        <form onSubmit={handleSubmit}>

        <FormInput
        label="Name"
        type="text" required 
        onChange={handleChange} 
        name="displayName" 
        value={displayName}
        />
        
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
        
        <FormInput
        label="Confirm Password"
        type="password" required 
        onChange={handleChange} 
        name='confirmPassword' value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>

        </form>
        </SignUpContainerDiv>
    )
}

export default SignUpForm;