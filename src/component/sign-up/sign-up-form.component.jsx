import { useState } from "react";
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
    "displayName": '',
    "email": '', 
    "password": '',
    "confirmPassword": ''
}


const SignUpForm = () =>{ 
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormField = () =>{
       setFormFields(defaultFormFields); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(password !== confirmPassword) { 
            alert("pasword doesnt match")
            return;   
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await creatUserDocumentFromAuth(user, {displayName});
            resetFormField();
        } catch(error){

        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value })
        console.log(value); 
};

    return (
        <div className="sign-up-container">
        <h2>Dont have an account?</h2> 
        <span>Sign in with your email and password </span>
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

        <Button type="submit">Sign In</Button>

        </form>
        </div>
    )
}

export default SignUpForm;