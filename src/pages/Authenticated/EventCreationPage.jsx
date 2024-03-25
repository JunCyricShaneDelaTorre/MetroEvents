import * as React from 'react';
import { Form } from 'react-router-dom';
import './AuthenticatedCss/EventCreationPage.css';

export default function EventCreationPage(){
    return(
        <div className='event-creation-wrapper'>
            <div className='event-creation-container'>

                <div className='event-creation-image-container'>
                    IMAGE
                </div>
                    <div className='event-creation-details-container'>
                        <Form method='post'>
                            <div className='event-form-event-name'>
                                <input type="text" placeholder='Event Name'/>
                            </div>
                            <div className='event-form-event-start'>
                                <label>
                                    <span>Start</span>
                                    <input type='datetime-local' placeholder='Start'/>
                                </label>
                            </div>
                            <div className='event-form-event-end'>
                                <label>
                                    <span>End</span>
                                    <input type="datetime-local" placeholder='End'/>
                                </label>
                            </div>
                            <div className=''>
                        
                            </div>
                            <div></div>               
                            
                            <input type="text" name="" id="" placeholder='Add Description' />
                        
                        <button type='submit'>Create Event</button>
                        </Form>
                    </div>
            
           
            </div>
        </div>
    )
}