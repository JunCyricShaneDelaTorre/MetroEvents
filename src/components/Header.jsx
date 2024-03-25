import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './ComponentsCss/Header.css';

export default function Header() {
    return (
        <div className='nav-wrapper'>
            <div className='nav-container'>
                <nav className='nav-bar'>
                    <div className='home-logo'>
                        <Link to={''} className='nav-links'>Logo</Link>
                    </div>
                    <div className='center-and-right'>
                        <div className='center-container'>
                            <Link to={''} className='nav-links'>Events</Link>
                            <Link to={'OrganizeEvents'} className='nav-links'>Create Event</Link>
                            <Link to={'BrowseEvents'} className='nav-links'>Explore Events</Link>
                        </div>
                        <div className='right-container'>
                            <div>notif</div>
                            <Link to={'Profile'} className='nav-links'>Profile</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>
    );
}
