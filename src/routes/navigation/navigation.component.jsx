import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';

import {selectIsCartOpen} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartDropdown from '../../component/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../component/cart-icon/cart-icon.compomemt';
import { ReactComponent as LogoC } from '../../assets/Shoe.svg';


import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.style';

const Navigation = () =>{
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
