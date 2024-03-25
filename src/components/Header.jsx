import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './ComponentsCss/Header.css';
import Logo from './Logo.png';
import Events from './Events.png';
import Create from './Create.png';
import Explore from './Explore.png';
import Notification from './Notification.png';
import Account from './Account.png';


export default function Header() {
    return (
        <div className='nav-wrapper'>
            <div className='nav-container'> 
                <nav className='navbar'>
                        <Link to={'/home'} className='imgl'><img src={Logo} alt="Logo" /></Link>
                    <div className='center-and-right'>
                        <div className='center-container'>
                            <div className='nav'>
                                <Link to={'/home'} className='Events'><img src={Events} alt="" /></Link>
                            </div>

                            <div className='nav'>
                                <Link to={'OrganizeEvents'} className='Create'><img src={Create} alt="" /></Link>
                            </div>

                            <div className='nav'>
                                <Link to={'BrowseEvents'} className='Explore'><img src={Explore} alt="" /></Link>
                            </div>

{/* 
                            <Link to={'OrganizeEvents'} className='nav-links'>Create Event</Link>
                            <Link to={'BrowseEvents'} className='nav-links'>Explore Events</Link> */}
                        </div>



                        <div className='right-container'>
                            <div className='nav'>
                                <Link to={'Notifications'} className='Notification'><img src={Notification} alt="" /></Link>
                            </div>
                            
                            
                            {/* <div>notif</div> */}
                            {/* <Link to={'Profile'} className='nav-links'>Profile</Link> */}
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>
    );
}
