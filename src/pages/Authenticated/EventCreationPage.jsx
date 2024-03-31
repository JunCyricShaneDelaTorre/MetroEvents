import * as React from 'react';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import './AuthenticatedCss/EventCreationPage.css';
import Logo from './Logo.png';
import axios from 'axios';

export default function EventCreationPage() {
    const [description, setDescription] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            setDescription(description + '\n'); // Append newline character
        }
    };
    // user_id: localStorage.user_id,

    const navigate = useNavigate()
    const[values, setValues] = useState({
        organizer_id: localStorage.userId,
        title: '',
        start_date: '',
        end_date: '',
        description: ''
    })

    const handleSubmit = (e) => {
        console.log(values)
        e.preventDefault();
        // setErrors(validation(values));
            axios.post('http://localhost:8081/eventCreation', values)
            .then(res => {
                navigate('/home/OrganizeDashboard')
            })
        .catch(err => console.log(err));
    }

    // const [errors, setErrors] = useState('')


    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

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
                    <Form method='post' onSubmit={handleSubmit}>
                        <div className='event-form-event-name'>
                            <input 
                            type="text" 
                            placeholder='Event Name' 
                            name='title'
                            onChange={handleInput}
                            />
                        </div>
                        <div>
                            Start Date:
                        </div>
                        <div className='event-form-event-start'>
                            <input 
                            type='datetime-local' 
                            placeholder='Start' 
                            name='start_date'
                            onChange={handleInput}
                            />
                        </div>
                        <div>
                            End Date:
                        </div>
                        <div className='event-form-event-end'>
                            <input 
                            type="datetime-local" 
                            placeholder='End'
                            name='end_date'
                            onChange={handleInput} 
                            />
                        </div>
                        <div className='event-form-event-description'>
                            <textarea 
                                placeholder='Add Description' 
                                value={description}
                                name='description'
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    handleInput(e);
                                }}
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
