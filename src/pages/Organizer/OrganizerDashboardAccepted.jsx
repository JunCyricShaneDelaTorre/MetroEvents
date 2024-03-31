import * as React from 'react';
import './OrganizerCss/OrganizerDashboard.css'
import { useState, useEffect } from 'react'; 
import {Link} from 'react-router-dom';
import './OrganizerCss/OrganizerDashboardAccepted.css';

export default function OrganizerDashboardAccepted() {
    const [requests, setRequests] = useState([]);
    
    useEffect(() => {
        // Fetch event registration requests with event titles when the component mounts
        fetch('http://localhost:8081/eventRegistrationsWithTitles')
            .then(response => response.json())
            .then(data => setRequests(data))
            .catch(error => console.error('Error fetching event registrations with titles:', error));
    }, []);

    const handleApprove = (registrationId, userId, eventId) => {
        fetch('http://localhost:8081/approveEventRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                registration_id: registrationId,
                user_id: userId,
                event_id: eventId
            }),
        })
        .then(response => {
            if (response.ok) {
                // Remove the approved request from the state
                setRequests(prevRequests => prevRequests.filter(request => request.registration_id !== registrationId));
            } else {
                throw new Error('Failed to approve request');
            }
        })
        .catch(error => console.error('Error approving request:', error));
    };
    
    return (
        <div className='org-dashboard-wrapper'>
            <div className='org-dashboard-container'>
                    <div className='org-dashboard-header'>
                        <h2>Requests</h2>
                    </div>
                    <div className='admin-dashboard-content'>
                        <div className='org-name-status-action'>
                            <div className='name-container'>
                                <div>ID</div>
                            </div>
                            <div className='org-status-and-action-container'>
                                <div className='e-title'>Event Title</div>
                                <div>Action</div>
                            </div>
                        </div>

                        <div className='org-test-requests'>
                        {requests.map((request, index) => (
                            <div className='org-request-item' key={index}>
                                <div className='org-left'>
                                    <div className='org-user-id'>
                                        <h3>{request.user_id}</h3>
                                    </div>
                                </div>
                                <div className='org-right'>
                                    <div className='org-event-title'>
                                        <p>{request.event_title}</p>
                                    </div>
                                    <div className='org-accept-and-reject'>
                                        <div className='org-accept-link'>
                                            <Link className='org-accept' onClick={() => handleApprove(request.registration_id, request.user_id, request.event_id)}>Approve</Link>
                                        </div>
                                        <div className='org-reject-link'>
                                            <Link className='org-reject' to={`/rejectRequest/${request.registration_id}`}>Reject</Link>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                                 {/* Display event title */}
                                {/* <Link to={`/approveRequest/${request.registration_id}`}>Approve</Link> */}
                                
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className='create-event-link'>
                       <div> 
                        Click <Link to={'CreateEvent'}> here</Link> to create more events!
                        </div>
                    </div>
            </div>
        </div>
    );
}
