import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PublicPageCss/LoginPage.css';
import axios from 'axios';
import { useState } from 'react'; // Removed redundant import of 'useEffect'
import validation from '../../Validations/LoginValidation';

export default function LoginPage() {
    const navigate = useNavigate();
    const[values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validation(values));

        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    const { success, userId } = res.data; // Destructure response data
    
                    if (success) {
                        // Store user_id in localStorage
                        localStorage.setItem('userId', userId);
                        // console.log(userId)
                        navigate('/Home');
                    } else {
                        alert("Invalid credentials");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    const [errors, setErrors] = useState('')


    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    
    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='welcome-section'>
                    <h1 className='welcome-text'>Welcome to PlanTek</h1>
                    <div className='secondary-text'>Sign in below</div>
                </div>
                <div className='login-form'>
                    <form className='form-content' onSubmit={handleSubmit}>
                        <div className='email-content'>
                            <div>Email:</div>
                            <div className='input-email'>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='name@gmail.com'
                                    className='input-box'
                                    
                                    onChange = {handleInput}
                                />
                                {errors.email && <span> {errors.email} </span>}
                            </div>
                        </div>
                        <div className='password-content'>
                            <div>Password:</div>
                            <div className='input-password'>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    className='input-box'
                                    
                                    onChange = {handleInput}
                                />
                            </div>
                            {errors.password && <span> {errors.password} </span>}
                        </div>
                        <button type='submit' className='submit-button'>
                            <div className='btn-text'>Login</div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


