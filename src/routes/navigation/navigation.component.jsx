import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react'; 

import { ReactComponent as CrownLogo } from '../../assets/dumons2.svg';
import './navigation.styles.scss';

import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);

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
            { currentUser 
              ? (<span className="nav-link" onClick={signOutUser} >SIGN OUT</span>)
              : (<Link className='nav-link' to='/auth'>SIGN IN</Link> )
            }
          </div>
        </div>
        <Outlet></Outlet>
      </Fragment>
    );
  }


  export default Navigation;