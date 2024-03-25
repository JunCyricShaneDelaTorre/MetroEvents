import * as React from 'react';
import './AdminCss/AdminLogin.css';

export default function AdminLogin(){
    return(
        <div className='admin-login-wrapper'>
            <div className='admin-login-container'>
                <div className='admin-welcome-section'>
                    <div className='admin-secondary-text'>
                        <h2>Admin Login</h2>
                    </div>
                </div>
                <div className='admin-login-form'>
                    <form method='' className='form-content'>
                        <div className='admin-email-content'>
                            <div>
                                Email:
                            </div>
                            <div className='input-email'>
                                <input type="email" placeholder='name@gmail.com' className='input-box' />
                            </div>
                        </div>
                        <div className='admin-password-content'>
                            <div>
                                Password:
                            </div>
                            <div className="admin-input-password">
                                <input type='password' placeholder='Password' className='input-box' />
                            </div>
                        </div>
                        <button type='admin-submit' className='submit-button'>
                            <div className='btn-text'>Login</div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}