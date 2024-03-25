import * as React from 'react';
import {Form} from 'react-router-dom';
import './PublicPageCss/SignUpPage.css';

export default function SignUpPage(){
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
                <Form method='' className='form-content'>
                    <div className='signup-email-content'>
                        <div>
                            Email:
                        </div>
                        <div className='input-email'>
                            <input type="email" placeholder='name@gmail.com' />
                        </div>
                    </div>
                    <div className='signup-password-content'>
                        <div>
                            Password:
                        </div>
                        <div className="input-password">
                            <input type='password' placeholder='Password'/>
                        </div>
                    </div>
                    <div className='firstname-content'>
                        <div>
                            First Name:
                        </div>
                        <div className='input-firstname'>
                            <input type="text" placeholder='Input your name here' />
                        </div>
                    </div>
                    <div className="lastname-content">
                        <div>
                            Last Name:
                        </div>
                        <div className="input-lastname">
                            <input type="text" placeholder='Input your last name here'/>
                        </div>
                    </div>
                    <div className="phonenumber-content">
                        <div>
                            Phone Number:
                        </div>
                        <div className="input-phonenumber">
                            <input type='number' placeholder='Input your number here' />
                        </div>
                    </div>
                    <button type='submit'>
                        <div className='btn-text'>Sign Up</div>
                    </button>
                </Form>
            </div>
        </div>
    </div>
    )
}