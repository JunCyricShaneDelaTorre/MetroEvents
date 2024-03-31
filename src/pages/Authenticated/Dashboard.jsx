import * as React from 'react';
import './AuthenticatedCss/Dashboard.css'
import Delete from './Delete.png';
import axios from 'axios';
import { useState, useEffect } from 'react'; 

export default function Dashboard(){
    const [events, setEvents] = useState([]);
    const [approvedEvents, setApprovedEvents] = useState([])

    useEffect(() => {
        // Fetch events from backend when the component mounts
        axios.get('http://localhost:8081/registeredEvents', {
            params: {
                user_id: localStorage.userId
            }
        })
            .then(response => {
                setEvents(response.data);
                
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });

            // Fetch events from backend when the component mounts
        axios.get('http://localhost:8081/approvedEvents', {
            params: {
                user_id: localStorage.userId
            }
        })
            .then(response => {
                setApprovedEvents(response.data);
                
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
            
    }, []); 
    console.log(events);
    const handleDeleteButtonClick = (eventId) => {
        // Display confirmation dialog
        const confirmDelete = window.confirm("Are you sure you want to delete this event registration?");
        
        // If user confirms, delete event registration
        if (confirmDelete) {
            // Make a DELETE request to delete the event registration
            axios.delete(`http://localhost:8081/eventRegistration/${eventId}`)
                .then(response => {
                    // Remove the deleted event from the events state
                    setEvents(events.filter(event => event.event_id !== eventId));
                    alert("Event registration deleted successfully!");
                })
                .catch(error => {
                    console.error('Error deleting event registration:', error);
                    alert("Error deleting event registration. Please try again later.");
                });
        }
    }

    return(
        <div className='dashboard-wrapper'>
            <div className='dashboard-container'>
                <div className='welcome-text'>
                    <h1>Your Events</h1>
                </div>

                
                <div className='dashboard-content'>
                <div className='welcome-text'>
                    <h3>Pending:</h3>
                </div>
                    <div className='dashboard-item-container'>
                        {events.map((event, index) => (
                            
                        <div className="event-item-home" key={index}>
                            <div className='event-details'>
                                <div className='event-title'>
                                    {event.title}
                                </div>
                                <div className='date-texts'>
                                    <strong>Start Date:</strong> {event.start_date}
                                </div>
                                <div className='date-texts'>
                                    <strong>End Date:</strong> {event.end_date}
                                </div>
                                <div className='event-description'>
                                    {event.description}
                                </div>
                                <div className='event-description'>
                                    {event.registration_status}
                                </div>
                            </div>
                            <img
                                src={Delete}
                                alt="delete icon"
                                className="delete-icon"
                                onClick={() => handleDeleteButtonClick(event.event_id)}
                            />
                        </div>
                    ))}
                    </div>
                    <div className='welcome-text'>
                    <h3>Approved:</h3>
                </div>
                    <div className='dashboard-item-container'>
                        {approvedEvents.map((eventA, index) => (
                            
                        <div className="event-item-home" key={index}>
                            <div className='event-details'>
                                <div className='event-title'>
                                    {eventA.title}
                                </div>
                                <div className='date-texts'>
                                    <strong>Start Date:</strong> {eventA.start_date}
                                </div>
                                <div className='date-texts'>
                                    <strong>End Date:</strong> {eventA.end_date}
                                </div>
                                <div className='event-description'>
                                    {eventA.description}
                                </div>
                                <div className='event-description'>
                                    {eventA.registration_status}
                                </div>
                            </div>
                            <img
                                src={Delete}
                                alt="delete icon"
                                className="delete-icon"
                                onClick={() => handleDeleteButtonClick(eventA.event_id)}
                            />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
