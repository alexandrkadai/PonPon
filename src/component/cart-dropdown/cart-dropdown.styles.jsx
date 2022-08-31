import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    overflow:hidden;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
      position: absolute;
      margin: 0 12px 0 12px;
      bottom: 20px;
      overflow: hidden;
      justify-content: center;
    }
`;
//END

export const EmptyMessage = styled.span`
      font-size: 18px;
      margin: 50px auto;
`;
//END
   
export const CartItems = styled.div`
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: auto;
`;
//END

