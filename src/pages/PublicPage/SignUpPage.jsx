import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './PublicPageCss/SignUpPage.css';
import axios from 'axios';
import { useState } from 'react'

export default function SignUpPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Email: '',
        FirstName: '',
        LastName: '',
        Password: '',
        UserType: 'user', // Assuming default user type is 'user'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/sample/api/register/', formData);
            console.log('Registration successful:', response.data);
            // Add code to handle successful registration (e.g., redirect user)
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            // Add code to handle registration failure (e.g., display error message)
        }
    };

    return(
        <div className='signup-wrapper'>
            <div className='signup-container'>
                <div className='welcome-section'>
                    <h1 className='welcome-text'>Welcome to PlanTek</h1>
                    <div className='secondary-text'>
                        Hello There, Sign up to Join or Create Events Now!
                    </div>
                </div>
                <div className='signup-form'>
                    <form onSubmit={handleSubmit} className='form-content'>
                        <div className='signup-email-content'>
                            <div>Email:</div>
                            <div className='input-email'>
                                <input
                                    type='email'
                                    placeholder='name@gmail.com'
                                    className='input-box'
                                    name='Email'
                                    value={formData.Email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='signup-password-content'>
                            <div>Password:</div>
                            <div className='input-password'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='input-box'
                                    name='Password'
                                    value={formData.Password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='firstname-content'>
                            <div>First Name:</div>
                            <div className='input-firstname'>
                                <input
                                    type='text'
                                    placeholder='Input your name here'
                                    className='input-box'
                                    name='FirstName'
                                    value={formData.FirstName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='lastname-content'>
                            <div>Last Name:</div>
                            <div className='input-lastname'>
                                <input
                                    type='text'
                                    placeholder='Input your last name here'
                                    className='input-box'
                                    name='LastName'
                                    value={formData.LastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button type='submit' className='submit-button'>
                            <div className='btn-text'>Sign-Up</div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}