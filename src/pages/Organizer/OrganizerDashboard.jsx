import * as React from 'react';
import './OrganizerCss/OrganizerDashboard.css'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


export default function OrganizerDashboard() {
    const navigate = useNavigate();
    const ls_user_id = localStorage.userId;
    const [values] = React.useState({
        userId: ls_user_id,
        request_status: "pending"
    });

    React.useEffect(() => {
        console.log("Values:", values);
    }, [values]);

    const handleRequest = () => {
        // Send request to backend to update user's organizer_approval_status to 'pending'
        axios.post('http://localhost:8081/organizerRequest', values)
            .then(response => {
                // Display alert message
                alert('User to Organizer request sent successfully! Please wait for further notifications.');
                console.log(response.data)
                navigate('/Home')
            })
            .catch(error => {
                console.error('Error sending organizer request:', error);
            });
    }

    return (
        <div className='organizer-page-wrapper'>
            <div className='organizer-page-container'>
                <div className='organizer-page-header-container'>
                    <div className='organizer-page-header-text'>Want to host one instead? Become an <Link onClick={handleRequest}>Organizer!</Link></div>

                </div>
                <div className='organizer-page-content-container'>
                    {/* Content goes here */}
                </div>
            </div>
        </div>
    );
}
