    import * as React from 'react';
    import { Link, Outlet } from 'react-router-dom';
    import './ComponentsCss/Header.css';
    


    export default function Header(){
        return(
            <div className='nav-wrapper'>
                <div className='nav-container'>
                    <nav className='nav-bar'>
                        <div className='home-logo'>
                            <Link to={''} className='nav-links'>Logo</Link>
                        </div>
                        <div className='center-and-right'>
                            <div className='center-container'>
                                <div className='dashboard-home-btn'>
                                    <Link to={''} className='nav-links'>Events</Link>
                                </div>
                                <div className='create-event-btn'>
                                    <Link to={'OrganizeEvents'} className='nav-links'>Create Event</Link>    
                                </div>
                                <div>
                                    <Link to={'BrowseEvents'} className='nav-links'>Explore Events</Link>
                                </div>
                            </div>
                            <div className='right-container'>
                                <div>notif</div>
                                <div><Link to={'Profile'} className='nav-links'>Profile</Link></div>
                            </div>
                        </div>
                    </nav>
                </div>

                <Outlet />
            </div>
        )
    }