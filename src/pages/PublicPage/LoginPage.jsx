import * as React from 'react';
import {Form} from 'react-router-dom';
import './PublicPageCss/LoginPage.css';


export default function LoginPage(){
    
    return(
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='welcome-section'>
                    <h1 className='welcome-text'>Welcome to PlanTek</h1>
                    <div className='secondary-text'>
                        Please sign in or sign up below.
                    </div>
                </div>
                <div className='login-form'>
                    <Form method=''>
                        <div className='email-content'>
                            <div>
                                Email:
                            </div>
                            <div className='input-email'>
                                <input type="email" placeholder='name@gmail.com' />
                            </div>
                        </div>
                        <div className='password-content'>
                            <div>
                                Password:
                            </div>
                            <div className="input-password">
                                <input type='password' placeholder='Password'/>
                            </div>
                        </div>
                        
                        <button type='submit' >
                            <div className='btn-text'>Login</div>
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    )
}