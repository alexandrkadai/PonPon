import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton, SpinnerContainer } from './button.styles';

export enum Button_Types_Classes {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

//Types of buttons
const getButton = (buttonType = Button_Types_Classes.base): typeof BaseButton =>
  ({
    [Button_Types_Classes.base]: BaseButton,
    [Button_Types_Classes.google]: GoogleSignInButton,
    [Button_Types_Classes.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: Button_Types_Classes;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

//Different Button types can be created
const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <SpinnerContainer /> : children}
    </CustomButton>
  );
};

export default Button;
