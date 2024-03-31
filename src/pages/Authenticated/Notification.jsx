import * as React from 'react';
import './AuthenticatedCss/Dashboard.css'

export default function Notification(){
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
        // Fetch user notifications when the component mounts
        fetchNotifications();
    }, []);
    console.log(notifications)
    const fetchNotifications = () => {
        // Assuming userId is available in localStorage
        const userId = localStorage.getItem('userId');
        fetch(`http://localhost:8081/notifications/${userId}`)
            .then(response => response.json())
            .then(data => setNotifications(data))
            .catch(error => console.error('Error fetching notifications:', error));
    };
   
    return(
        <div className='dashboard-wrapper'>
            <div className='dashboard-container'>
                <div className='welcome-text'>
                    <h1>Your Notifications</h1>
                </div>
                <div className='dashboard-content'>
                    <div className='dashboard-item-container'>
{/*                         
                            <div className="event-item-home">
                                <div className='event-details'>
                                    <div className='event-title'>
                                        Title sa Notif
                                    </div>
                                    <div className='event-description'>
                                        Approved sa pag join sa event!
                                    </div>
                                </div>
                               
                            </div> */}
                            {notifications.map(notification => (
                            <div className="event-item-home" key={notification.notification_id}>
                                <div className='event-details'>
                                    <div className='event-title'>
                                        {notification.event_id}
                                    </div>
                                    <div className='event-description'>
                                        {notification.message}
                                    </div>
                                    <div className='event-description'>
                                        {notification.notification_date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
