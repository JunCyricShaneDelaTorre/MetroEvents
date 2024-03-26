import React from 'react';
import { Link } from 'react-router-dom';
import './PublicPageCss/LoginPage.css';

export default function LoginPage() {
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
                    <form method='' className='form-content'>
                        <div className='email-content'>
                            <div>
                                Email:
                            </div>
                            <div className='input-email'>
                                <input type="email" placeholder='name@gmail.com' className='input-box' />
                            </div>
                        </div>
                        <div className='password-content'>
                            <div>
                                Password:
                            </div>
                            <div className="input-password">
                                <input type='password' placeholder='Password' className='input-box' />
                            </div>
                        </div>
                        <button type='submit' className='submit-button'>
                            <div className='btn-text'>Login</div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
