import * as React from 'react';
import './AdminCss/AdminDashboard.css'
import axios from 'axios';
import { useState, useEffect } from 'react'; 
import {Link, useNavigate} from 'react-router-dom';

export default function AdminDashboard(){
    const [requests, setRequests] = React.useState([]);

     useEffect(() => {
         // Fetch events from backend when the component mounts
         axios.get('http://localhost:8081/fetchRequests')
             .then(response => {
                 setRequests(response.data);
             })
             .catch(error => {
                 console.error('Error fetching requests:', error);
             });
     }, []);

      // Function to handle approval of a request
    const handleApprove = (request_id, user_id) => {
        axios.post('http://localhost:8081/approveRequest', { request_id, user_id })
            .then(response => {
                // If the request is successfully approved, fetch the updated list of requests
                axios.get('http://localhost:8081/fetchRequests')
                    .then(response => {
                        setRequests(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching requests after approval:', error);
                    });
            })
            .catch(error => {
                console.error('Error approving request:', error);
            });    
    };

    return(
        <div className='admin-dashboard-wrapper'>
            <div className='admin-dashboard-container'>
                    <div className='admin-dashboard-header'>
                        <h2>Requests</h2>
                    </div>

                    <div className='admin-dashboard-content'>
                        <div className='name-status-action'>
                            <div className='name-container'>
                                <div>ID</div>
                            </div>
                            <div className='status-and-action-container'>
                                <div>Status</div>
                                <div>Action</div>
                                
                            </div>
                        </div>

                        <div className='test-requests'>
                        {requests.map(request => (
                            <div key={requests.request_id} className='request-item'>
                                <div className='user-id'><h3>{request.user_id}</h3></div>
                                <div className='request-status-and-approve'>
                                    <p>{request.request_status}</p>
                                    <div className='approve-and-reject'>
                                        <div className='approve'>
                                            <Link className='approve-link' onClick={() => handleApprove(request.request_id, request.user_id)}>Approve</Link>
                                        </div>
                                        <div className='reject'>
                                            <Link className='reject-link'>Reject</Link>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                               
                                {/* Additional event details can be displayed here */}
                            </div>
                        ))}
                        </div>

                    </div>
            </div>
        </div>
    )
}