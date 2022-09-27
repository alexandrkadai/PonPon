import { useState, FormEvent, ChangeEvent, HtmlHTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import FormInput from '../form-input/form-input.component';
import Button, { Button_Types_Classes } from '../button/button.component';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

import { SignUpContainerDiv, ButtonsContainerDiv } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormField();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
        alert('Wrong Password for Your Email');
      } else if ((error as AuthError).code === AuthErrorCodes.NULL_USER) {
        alert('Such User email dont Registered');
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(value);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignUpContainerDiv>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainerDiv>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={Button_Types_Classes.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainerDiv>
      </form>
    </SignUpContainerDiv>
  );
};

export default SignInForm;
