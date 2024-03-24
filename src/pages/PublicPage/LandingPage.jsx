import * as React from 'react';
import { Link } from 'react-router-dom';
import './PublicPageCss/LandingPage.css';
import Logo from './Logo.png';
import PlantekwLogo from './PlantekwLogo.png';
import CustomButton from './CustomButton'; 

export default function LandingPage() {
  const handleClick = () => {
    // Handle button click event
  };

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

      <div className='container2'>
        <Link to={'/'} className='Plantek'><img src={PlantekwLogo} alt="Plantek" /></Link>
        <div className='title'>Teknoys Unite! Plan the Perfect Event with PlanTek.</div>
        <div className='subtitle'>Turn Event Planning from Stress to Success</div>
        <div className='buttonc'>
            <CustomButton onClick={handleClick}>Explore Events</CustomButton>
        </div>
        
      </div>
    </div>
  );
}
