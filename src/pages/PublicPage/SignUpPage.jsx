import * as React from 'react';
import {Form} from 'react-router-dom';
import './PublicPageCss/SignUpPage.css';
import { useState } from 'react'
import supabase from '../../config/supabaseClient';

export default function SignUpPage() {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        phoneNumber:''  
      })
    
      console.log(formData)
    
      function handleChange(event){
        setFormData((prevFormData)=>{
          return{
            ...prevFormData,
            [event.target.name]:event.target.value
          }
        })
      }
      async function handleSubmit(e){
        e.preventDefault()
    
        try {
          const { data, error } = await supabase.auth.signUp(
            {
                email: formData.email,
                password: formData.password,
                options: {
                data: {
                  first_name: formData.firstName,
                  last_name: formData.lastName,
                  phone_number: formData.phoneNumber
                }
              }
              
            }
          )
          if (error) throw error
          alert('Check your email for verification link')
          console.log(data)
          
        } catch (error) {
          alert(error)
        }
      }

    return(
        <div className='signup-wrapper'>
        <div className='signup-container'>
            <div className='welcome-section'>
                <h1 className='welcome-text'>Welcome to mecobaby143</h1>
                <div className='secondary-text'>
                    Hello New Person, Sign up to Join or Create Events Now!
                </div>
            </div>
            <div className='signup-form'>
                <Form method='' className='form-content' onSubmit={handleSubmit}>
                    <div className='signup-email-content'>
                        <div>
                            Email:
                        </div>
                        <div className='input-email'>
                            <input 
                            name='email'
                            type="email" 
                            placeholder='name@gmail.com'
                            onChange={handleChange} />
                        </div>
                    </div>
                    <div className='signup-password-content'>
                        <div>
                            Password:
                        </div>
                        <div className="input-password">
                            <input 
                            name='password'
                            type='password' 
                            placeholder='Password'
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='firstname-content'>
                        <div>
                            First Name:
                        </div>
                        <div className='input-firstname'>
                            <input 
                            name='firstName'
                            type="text" 
                            placeholder='Input your name here' 
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="lastname-content">
                        <div>
                            Last Name:
                        </div>
                        <div className="input-lastname">
                            <input 
                            name='lastName'
                            type="text" 
                            placeholder='Input your last name here'
                            onChange={handleChange}/>
                            
                        </div>
                    </div>
                    <div className="phonenumber-content">
                        <div>
                            Phone Number:
                        </div>
                        <div className="input-phonenumber">
                            <input 
                            name='phoneNumber'
                            type='number' 
                            placeholder='Input your number here' 
                            onChange={handleChange}
                            />
                            
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