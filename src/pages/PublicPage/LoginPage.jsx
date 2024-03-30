import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PublicPageCss/LoginPage.css';
import axios from 'axios';
import { useState } from 'react'; // Removed redundant import of 'useEffect'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log('Data sent in the request:', { Email: email, Password: password });
            
            const csrftoken = getCookie('csrftoken');

            const response = await axios.post('http://127.0.0.1:8000/sample/api/login/', {
                Email: email, // Check if backend expects 'Email' instead of 'email'
                Password: password
            }, {
                headers: {
                    'X-CSRFToken': csrftoken
                }
            });

            console.log('Response:', response.data);
            navigate('/dashboard');

        } catch (error) {
            console.error('Error:', error.response.data);
            setError(error.response.data.error);
        }
    };

    const getCookie = (name) => {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    };

    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='welcome-section'>
                    <h1 className='welcome-text'>Welcome to PlanTek</h1>
                    <div className='secondary-text'>
                        Sign in below
                    </div>
                </div>
                <div className='login-form'>
                <form className='form-content' onSubmit={handleSubmit}>
                    <div className='email-content'>
                        <div>Email:</div>
                        <div className='input-email'>
                            <input 
                                type="email" 
                                name='Email'  // Use 'Email' as the input name
                                placeholder='name@gmail.com' 
                                className='input-box' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='password-content'>
                        <div>Password:</div>
                        <div className="input-password">
                            <input 
                                type='password' 
                                name='Password'  // Use 'Password' as the input name
                                placeholder='Password' 
                                className='input-box' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type='submit' className='submit-button'>
                        <div className='btn-text'>Login</div>
                    </button>
                </form>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </div>
    );
}
