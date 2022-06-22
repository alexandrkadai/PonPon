import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
const Navigation = () =>{
    return (
      <Fragment>
            <div className='navigation'>
            <Link className='link-home' to='/'>
                <div>Logo</div>
            </Link>
                <div className='container-link'>
                    <Link className='nav-link' to='/shop'>
                    Shop
                    </Link>
                </div>
            </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;
