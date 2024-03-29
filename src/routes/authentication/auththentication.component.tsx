import SignUpForm from '../../component/sign-up/sign-up-form.component';
import SignInForm from '../../component/sign-in-form/sign-in-form.component';
import { AuthenticationContainerDiv } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainerDiv>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainerDiv>
  );
};

export default Authentication;
