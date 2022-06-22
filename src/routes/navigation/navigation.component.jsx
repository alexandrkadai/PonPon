import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.style.scss';
import { ReactComponent as LogoC } from '../../assets/Shoe.svg';

const Navigation = () =>{
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
                </div>
            </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;
