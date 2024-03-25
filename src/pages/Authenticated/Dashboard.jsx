import * as React from 'react';
import './AuthenticatedCss/Dashboard.css'

export default function Dashboard(){
    return(
        <div className='dashboard-wrapper'>
            <div className='dashboard-container'>

                <div className='dashboard-welcome-text'>
                    <h1>Your Events</h1>
                </div>

                <div className='dashboard-content'>
                    <div className='dashboard-item-container'>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                        <div className="event-item">event</div>
                    </div>
                </div>

            </div>            
        </div>
    )
}