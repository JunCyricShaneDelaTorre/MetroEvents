import * as React from 'react';
import './AdminCss/AdminNotif.css';


export default function AdminNotif(){

   
    return(
        <div className='dashboard-wrapper'>
            <div className='dashboard-container'>
                <div className='welcome-text'>
                    <h1>Your Notifications</h1>
                </div>
                <div className='dashboard-content'>
                    <div className='dashboard-item-container'>
                        
                            <div className="event-item-home">
                                <div className='event-details'>
                                    <div className='event-title'>
                                        Title sa Notif
                                    </div>
                                    <div className='event-description'>
                                        Approved sa pag join sa event!
                                    </div>
                                </div>
                               
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
