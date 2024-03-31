import * as React from 'react';
import './OrganizerCss/OrganizerDashboard.css'
import { useState, useEffect } from 'react'; 
import {Link} from 'react-router-dom';


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
        <div className='admin-dashboard-wrapper'>
            <div className='admin-dashboard-container'>
                    <div className='admin-dashboard-header'>
                        <h2>Requests</h2>
                    </div>
                    <div className='admin-dashboard-content'>
                        <div className='name-status-action'>
                            <div className='name-container'>
                                <div>Name</div>
                            </div>
                            <div className='status-and-action-container'>
                                <div>Status</div>
                                <div>Action</div>
                            </div>
                        </div>

                        <div className='test-requests'>
                        {requests.map((request, index) => (
                            <div className='request-item' key={index}>
                                <h3>{request.user_id}</h3>
                                <p>{request.request_status}</p>
                                <p>{request.event_title}</p> {/* Display event title */}
                                {/* <Link to={`/approveRequest/${request.registration_id}`}>Approve</Link> */}
                                <button onClick={() => handleApprove(request.registration_id, request.user_id, request.event_id)}>Approve</button>
                                <Link to={`/rejectRequest/${request.registration_id}`}>Reject</Link>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>Create an event <Link to={'CreateEvent'}>here</Link>!</div>
            </div>
        </div>
    );
}
