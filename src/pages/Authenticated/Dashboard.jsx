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

                <div className='dashboard-welcome-text'>
                    <h1>Your Events</h1>
                </div>

                <div className='dashboard-content'>
                    <div className='dashboard-item-container'>
                        <div className="event-item-home">
                            <div className='event-title'>
                                InnovateCon
                            </div>
                            <img
                                src={Delete}
                                alt="plus sign"
                                className="plus-sign"
                                onClick={handleDeleteButtonClick}
                            />
                        </div>
                        <div className="event-item-home">
                            <div className='event-title'>
                                InnovateCon
                            </div>
                            <img
                                src={Delete}
                                alt="plus sign"
                                className="plus-sign"
                                onClick={handleDeleteButtonClick}
                            />
                        </div>
                        <div className="event-item-home">
                            <div className='event-title'>
                                InnovateCon
                            </div>
                            <img
                                src={Delete}
                                alt="plus sign"
                                className="plus-sign"
                                onClick={handleDeleteButtonClick}
                            />
                        </div>
                        <div className="event-item-home">
                            <div className='event-title'>
                                InnovateCon
                            </div>
                            <img
                                src={Delete}
                                alt="plus sign"
                                className="plus-sign"
                                onClick={handleDeleteButtonClick}
                            />
                        </div>
                        <div className="event-item-home">
                            <div className='event-title'>
                                InnovateCon
                            </div>
                            <img
                                src={Delete}
                                alt="plus sign"
                                className="plus-sign"
                                onClick={handleDeleteButtonClick}
                            />
                        </div>
                        

                    </div>
                </div>

            </div>            
        </div>
    )
}