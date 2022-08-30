import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import{ signOutUser } from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../component/cart-icon/cart-icon.compomemt';
import { ReactComponent as LogoC } from '../../assets/Shoe.svg';


import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.style';

const Navigation = () =>{
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
    return (
      <Fragment>
            <NavigationContainer className='navigation'>
            <LogoContainer to='/'>
                <LogoC className='logo'/>
            </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                    Shop
                    </NavLink>
                    {
                      currentUser ? (
                        <NavLink as='span'  onClick={signOutUser}>Sign Out</NavLink>
                      ) : (
                      <NavLink to='/authentication'>
                      Sign In
                      </NavLink>
                      )
                    }
                    <CartIcon/>
                  
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;
