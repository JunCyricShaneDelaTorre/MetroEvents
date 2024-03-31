import * as React from 'react';
import './PublicPageCss/EventBrowserPage.css'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';


export default function EventBrowserPage(){
    const [events, setEvents] = useState([]);
    const ls_user_id = localStorage.userId;
    const navigate = useNavigate()
     useEffect(() => {
         // Fetch events from backend when the component mounts
         axios.get('http://localhost:8081/events')
             .then(response => {
                 setEvents(response.data);
             })
             .catch(error => {
                 console.error('Error fetching events:', error);
             });
     }, []); // Empty dependency array ensures this effect runs only once after the component mounts

     const handleRegister = (curr_event_id) => {
        const pending = "pending"
        const date_now = new Date()
        console.log(ls_user_id, curr_event_id, pending, date_now)
        
            axios.post('http://localhost:8081/home/eventRegistrationPending', {ls_user_id, curr_event_id, pending, date_now})
            .then(res => {
                alert("Event now registered!")
                navigate('/home')
            })
        .catch(err => console.log(err));
    }

     return(
        <div className='eventBrowser-wrapper'>
            <div className='eventBrowser-container'>

                <div className='welcome-text'>
                    <h1>Explore Events Here</h1>
                </div>
                <div className='event-secondary-text'>
                    Explore events here, we feature new events weekly for you to explore!
                </div>
                <div className='eventBrowser-content'>
                    <div className='content-header'>
                        <h2>
                            Featured events for this week
                        </h2>
                    </div>
                    <div className='event-container'>
                        {/* Map over events and render each event */}
                        {events.map(event => (
                            <div key={event.event_id} className='event-item'>
                                <strong>{event.title}</strong>
                                <p>{event.description}</p>
                                <p>Start date: {event.start_date}</p>
                                <p>End date: {event.end_date}</p>
                                <Link onClick={() => handleRegister(event.event_id)}>R</Link>
                                {/* Additional event details can be displayed here */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>            
        </div>
        
    )
}