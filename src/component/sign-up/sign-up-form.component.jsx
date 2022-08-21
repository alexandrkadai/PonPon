import { useState } from "react";
 import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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

        <label>Name</label>
        <input type="text" required 
        onChange={handleChange} 
        name='displayName' value={displayName}/>
        
        <label>Email</label>
        <input type="email" required 
        onChange={handleChange} 
        name='email' value={email}/>
        
        <label>Password</label>
        <input type="password" required 
        onChange={handleChange} 
        name='password' value={password}/>
        
        <label>Confirm Password</label>
        
        <input type="password" required 
        onChange={handleChange} 
        name='confirmPassword' value={confirmPassword}/>
        <button style={{width: 30, height: 15}} type="submit"></button>
        </form>
        </div>
    )
}

export default SignUpForm;