import * as React from 'react';
import './PublicPageCss/EventBrowserPage.css'
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'; 



export default function EventBrowserPage(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from the backend API
        axios.get('http://127.0.0.1:8000/sample/api/public_events/')
            .then(response => {
                // Set the events state with the fetched events
                setEvents(response.data);
                console.log(events)
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

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
                        {/* <div className="event-item">event 1</div>
                        <div className="event-item">event 2</div>
                        <div className="event-item">event 3</div>
                        <div className="event-item">event 4</div>
                        <div className="event-item">event 5</div>
                        <div className="event-item">event 6</div>
                        <div className="event-item">event 7</div>
                        <div className="event-item">event 8</div>
                        <div className="event-item">event 9</div>
                        <div className="event-item">event 10</div>
                        <div className="event-item">event 11</div>
                        <div className="event-item">event 12</div>
                        <div className="event-item">event 13</div>
                        <div className="event-item">event 14</div>
                        <div className="event-item">event 15</div>
                        <div className="event-item">event 16</div>
                        <div className="event-item">event 17</div>
                        <div className="event-item">event 18</div>
                        <div className="event-item">event 19</div>
                        <div className="event-item">event 20</div>
                        <div className="event-item">event 21</div>
                        <div className="event-item">event 22</div>
                        <div className="event-item">event 23</div>
                        <div className="event-item">event 24</div>
                        <div className="event-item">event 25</div>
                        <div className="event-item">event 26</div>
                        <div className="event-item">event 27</div>
                        <div className="event-item">event 28</div>
                        <div className="event-item">event 29</div>
                        <div className="event-item">event 30</div> */}
                        {events.map(event => (
                            <div className="event-item" key={event.pk}>
                                {/* Render event details */}
                                <h3>{event.fields.EventName}</h3>
                                <p>Type: {event.fields.EventType}</p>
                                <p>Date: {event.fields.EventDate}</p>
                                <p>Description: {event.fields.EventDescription}</p>
                                {/* You can add more details as needed */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>            
        </div>
        
    )
}