import * as React from 'react';
import {Link} from 'react-router-dom';
import './AdminCss/AdminHeader.css';

export default function AdminHeader(){
    return(
        <div className='nav-wrapper'>
                <div className='nav-container'>
                    <nav className='admin-nav-bar'>
                        <div className='home-logo'>
                            <Link to={''} className='admin-nav-links'>Admin</Link>
                        </div>
                        <div className='admin-center-and-right'>
                            <div className='admin-center-container'>
                                <div className='dashboard-home-btn'>
                                    <Link to={''} className='admin-nav-links'>Organizer</Link>
                                </div>
                                <div className='create-event-btn'>
                                    <Link to={''} className='admin-nav-links'>Users</Link>    
                                </div>
                                <div>
                                    <Link to={''} className='admin-nav-links'>Events</Link>
                                </div>
                            </div>
                            <div className='admin-right-container'>
                                <div>notif</div>
                                <div><Link to={''} className='admin-nav-links'>Logout</Link></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    )
}