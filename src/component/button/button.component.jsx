import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles";

export const Button_Types_Classes = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

//Types of buttons
const getButton = (buttonType = Button_Types_Classes.base) => (
    {
        [Button_Types_Classes.base]: BaseButton,
        [Button_Types_Classes.google]: GoogleSignInButton,
        [Button_Types_Classes.inverted]: InvertedButton

    }[buttonType]
);

//Different Button types can be created
const Button = ({children, buttonType, ...otherProps}) =>{
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps} >{children}</CustomButton>;

    
};

export default Button;