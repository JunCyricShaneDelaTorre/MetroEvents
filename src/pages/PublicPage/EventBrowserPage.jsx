import * as React from 'react';
import './PublicPageCss/EventBrowserPage.css';
import Plus from './Plus.png';

export default function EventBrowserPage() {
    const handlePlusButtonClick = () => {
        console.log('Plus button clicked');
        alert('Login first to join event!');
    };

    return (
        <div className='eventBrowser-wrapper'>
            <div className='eventBrowser-container'>
                <div className='welcome-text'>
                    <h1>Explore Events Here</h1>
                </div>
                <div className='eventBrowser-content'>
                    <div className='content-header'>
                        <h2>Featured events for this week</h2>
                    </div>
                    <div className='event-container'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((event, index) => (
                            <div className="event-item" key={index}>
                                <div className='event-detail'>
                                    <div className='event-title1'>InnovateCon</div>
                                    <div className='event-details-container'>
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
                                </div>
                                <img
                                    src={Plus}
                                    alt="plus sign"
                                    className="plus-sign"
                                    onClick={handlePlusButtonClick}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
