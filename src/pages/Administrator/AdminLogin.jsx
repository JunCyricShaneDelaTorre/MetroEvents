import * as React from 'react';
import './AdminCss/AdminLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react'; // Removed redundant import of 'useEffect'
import validation from '../../Validations/LoginValidation';

export default function AdminLogin(){
    const navigate = useNavigate();
    const[values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validation(values));

        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/adminlogin', values)
                .then(res => {
                    const { success, adminId } = res.data; // Destructure response data
    
                    if (success) {
                        // Store user_id in localStorage
                        localStorage.setItem('adminId', adminId);
                        console.log(adminId)
                        navigate('/AdminDashboard');
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
    
    return(
        <div className='admin-login-wrapper'>
            <div className='admin-login-container'>
                <div className='admin-welcome-section'>
                    <div className='admin-secondary-text'>
                        <h2>Admin Login</h2>
                    </div>
                </div>
                <div className='admin-login-form'>
                    <form method='' className='form-content' onSubmit={handleSubmit}>
                        <div className='admin-email-content'>
                            <div>
                                Email:
                            </div>
                            <div className='input-email'>
                                <input 
                                type="email" 
                                name='email'
                                placeholder='name@gmail.com' 
                                className='input-box' 
                                onChange = {handleInput}
                                />
                            </div>
                        </div>
                        <div className='admin-password-content'>
                            <div>
                                Password:
                            </div>
                            <div className="admin-input-password">
                                <input 
                                type='password' 
                                name='password'
                                placeholder='Password'
                                className='input-box' 
                                onChange = {handleInput}
                                />
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