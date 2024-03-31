import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './ComponentsCss/Header.css';
import Logo from './Logo.png';
import Events from './Events.png';
import Create from './Create.png';
import Explore from './Explore.png';
import Notification from './Notification.png';
import Signout from './Signout.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header() {
    const navigate = useNavigate();
    const [check, setChecker] = useState(0) // change this if you deem necessary :)


    const handleSignOut = () => {
        // Clear user information from local storage
        localStorage.removeItem('userId');
        // Redirect user to login page
        navigate('/');
    };

    useEffect(() => {
        // Function to check if the user is an organizer
        const checkOrganizerStatus = async () => {
            try {
                // Retrieve user_id from local storage
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    // If userId is not found, return
                    return;
                }

                // Send a request to the server to check if the user is an organizer
                const response = await axios.post('http://localhost:8081/checkOrganizer', { user_id: userId });

                // Set the checker state based on the response
                setChecker(response.data);

                console.log("User status: (0-User) (1-Organizer) = " + response.data);
            } catch (error) {
                console.error('Error checking organizer status:', error);
            }
        };

        // Call the function to check if the user is an organizer
        checkOrganizerStatus();

    }, []);

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
                                {/* <Link name="CreateEventsLink" to={'OrganizeEvents'} className='Create'><img src={Create} alt="" /></Link> */}
                                {check === 1 ? (
                                <Link to={'/home/OrganizeDashboard'} className='Create'><img src={Create} alt="" /></Link>
                            ) : (
                                <Link to={'/home/OrganizeEvents'} className='Create'><img src={Create} alt="" /></Link>
                            )}
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
                            <div className='nav'>
                                <Link to={'/'} className='Signout' onClick={handleSignOut}><img src={Signout} alt="" /></Link>
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
