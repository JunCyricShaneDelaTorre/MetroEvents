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
                <h1 className='welcome-text'>Welcome to PlanTek</h1>
                <div className='secondary-text'>
                    Hello There, Sign up to Join or Create Events Now!
                </div>
            </div>
            <div className='signup-form'>

            </div>
        </div>
    </div>
    )
}