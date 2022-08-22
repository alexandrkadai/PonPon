import { useState } from "react";
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
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
        <div> 
        <h1>Sign in with your email and password </h1>
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

        <button style={{width: 50, height: 25}} type="submit">Sign In</button>

        </form>
        </div>
    )
}

export default SignUpForm;