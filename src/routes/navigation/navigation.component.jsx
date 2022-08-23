import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import{ signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.style.scss';
import { ReactComponent as LogoC } from '../../assets/Shoe.svg';

const Navigation = () =>{
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  console.log(currentUser);
    return (
      <Fragment>
            <div className='navigation'>
            <Link className='link-home' to='/'>
                <LogoC className='logo'/>
            </Link>
                <div className='container-link'>
                    <Link className='nav-link' to='/shop'>
                    Shop
                    </Link>
                    {
                      currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                      ) : (
                      <Link className='nav-link' to='/authentication'>
                      Sign In
                      </Link>
                      )
                    }
                  
                </div>
            </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;
