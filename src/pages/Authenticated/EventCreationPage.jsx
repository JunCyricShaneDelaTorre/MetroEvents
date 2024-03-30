import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import './AuthenticatedCss/EventCreationPage.css';
import Logo from './Logo.png';

export default function EventCreationPage() {
    const [description, setDescription] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            setDescription(description + '\n'); // Append newline character
        }
    };

    return (
        <div className='event-creation-wrapper'>
            <div className='event-creation-container'>
                <div className='event-creation-image-container'>
                    <img src={Logo} alt="" /> 
                </div>
                <div className='title1'>
                    Creating your event
                </div>
                <div className='event-creation-details-container'>
                    <Form method='post'>
                        <div className='event-form-event-name'>
                            <input type="text" placeholder='Event Name' />
                        </div>
                        <div>
                            Start Date:
                        </div>
                        <div className='event-form-event-start'>
                            <input type='datetime-local' placeholder='Start' />
                        </div>
                        <div>
                            End Date:
                        </div>
                        <div className='event-form-event-end'>
                            <input type="datetime-local" placeholder='End' />
                        </div>
                        <div className='event-form-event-description'>
                            <textarea 
                                placeholder='Add Description' 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <button type='submit'>Create Event</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
