import * as React from 'react';
import './AuthenticatedCss/Dashboard.css'
import Delete from './Delete.png';

export default function Dashboard(){

    const handleDeleteButtonClick = () => {
        // Add your logic here to handle the button click
    }

    return(
        <div className='dashboard-wrapper'>
            <div className='dashboard-container'>
                <div className='welcome-text'>
                    <h1>Your Events</h1>
                </div>
                <div className='dashboard-content'>
                    <div className='dashboard-item-container'>
                        {[1, 2, 3, 4, 5].map((event, index) => (
                            <div className="event-item-home" key={index}>
                                <div className='event-details'>
                                    <div className='event-title'>
                                        InnovateCon
                                    </div>
                                    <div className='date-texts'>
                                        <strong>Start Date:</strong> March 28, 2024
                                    </div>
                                    <div className='date-texts'>
                                        <strong>End Date:</strong> March 30, 2024
                                    </div>
                                    <div className='event-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae velit sit amet lectus fermentum interdum.
                                    </div>
                                </div>
                                <img
                                    src={Delete}
                                    alt="delete icon"
                                    className="delete-icon"
                                    onClick={handleDeleteButtonClick}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
