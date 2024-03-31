import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './PublicPageCss/SignUpPage.css';
import axios from 'axios';
import { useState } from 'react'
import validation from '../../Validations/SignUpValidation';


export default function SignUpPage() {
    const navigate = useNavigate()
    const[values, setValues] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === "" && errors.first_name === "" && errors.last_name==="") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err));

        }
    }

    const [errors, setErrors] = useState('')


    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

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
                                    name='email'
                                    // value={formData.Email}
                                    onChange={handleInput}
                                />
                            {errors.email && <span> {errors.email} </span>}

                            </div>
                        </div>
                        <div className='signup-password-content'>
                            <div>Password:</div>
                            <div className='input-password'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='input-box'
                                    name='password'
                                    // value={formData.Password}
                                    onChange={handleInput}
                                />
                            {errors.password && <span> {errors.password} </span>}

                            </div>
                        </div>
                        <div className='firstname-content'>
                            <div>First Name:</div>
                            <div className='input-firstname'>
                                <input
                                    type='text'
                                    placeholder='Input your name here'
                                    className='input-box'
                                    name='first_name'
                                    // value={formData.FirstName}
                                    onChange={handleInput}
                                />
                                {errors.first_name && <span> {errors.first_name} </span>}
                            </div>
                        </div>
                        <div className='lastname-content'>
                            <div>Last Name:</div>
                            <div className='input-lastname'>
                                <input
                                    type='text'
                                    placeholder='Input your last name here'
                                    className='input-box'
                                    name='last_name'
                                    // value={formData.LastName}
                                    onChange={handleInput}
                                />
                                {errors.last_name && <span> {errors.last_name} </span>}
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