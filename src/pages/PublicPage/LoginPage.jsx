
import './PublicPageCss/LoginPage.css';
import supabase from '../../config/supabaseClient';
import { useState } from 'react'


        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='welcome-section'>
                    <h1 className='welcome-text'>Welcome to PlanTek</h1>
                    <div className='secondary-text'>
                        Please sign in or sign up below.
                    </div>
                </div>
                <div className='login-form'>
                        <div className='email-content'>
                            <div>
                                Email:
                            </div>
                            <div className='input-email'>
                            </div>
                        </div>
                        <div className='password-content'>
                            <div>
                                Password:
                            </div>
                            <div className="input-password">

                            </div>
                        </div>
                        <button type='submit' className='submit-button'>
                            <div className='btn-text'>Login</div>
                        </button>
                    </form>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
