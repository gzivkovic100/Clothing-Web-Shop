import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react'; 

import { ReactComponent as CrownLogo } from '../../assets/dumons2.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation' >
            <Link className='logo-container' to='/' >
                <CrownLogo className='logo' />
            </Link>
            
            <div className='nav-links-container' >
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/sign-in'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet></Outlet>
      </Fragment>
    );
  }


  export default Navigation;