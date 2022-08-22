
import SignUpForm  from '../../component/sign-up/sign-up-form.component';
import SignInForm from '../../component/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
import {
        auth, 
        signInWithGooglePopup, 
        signInWithGoogleRedirect,
        creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const Authentication = () => {

    return(
        <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
        </div>
);
};

export default Authentication;
