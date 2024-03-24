import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './PublicPageCss/LandingPage.css';
import Logo from './Logo.png';

export default function LandingPage() {
  
  return (
    <div className='LandingPage-wrapper'>
      <div className='nav-container'>
        <div className='navbar'>
          <div className='logo'>
            <Link to={'/'} className='Logo'><img src={Logo} alt="Logo" /></Link>
          </div>
          <div className='login-signup'>
            <Link to={'Login'} className='Login' >Login</Link>
            <Link to={'SignUp'} className='SignUp' >Sign Up</Link>
          </div>
        </div>
      </div>
      <Outlet />

    </div>
  );
}
