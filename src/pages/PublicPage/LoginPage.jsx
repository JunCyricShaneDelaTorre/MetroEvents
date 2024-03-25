import * as React from 'react';
// import {  } from 'react';
import {Form} from 'react-router-dom';
import './PublicPageCss/LoginPage.css';
import supabase from '../../config/supabaseClient';
import { useState } from 'react'

const SupabaseLoader = () => { // just to check if supabase succeeds in connecting
    console.log(supabase);
    return null; 
};

export default function LoginPage( {} ){
    const [formData,setFormData] = useState({
        email:'',password:''
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
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

    if (error) throw error
    console.log(data)
    // handle move to homepage session

    } catch (error) {
      alert(error)
    }
  }

    return(
        
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='welcome-section'>
                    <h1 className='welcome-text'>Welcome to mecobaby143</h1>
                    <div className='secondary-text'>
                        Welcome back, Resume your Event Hunting Now!
                    </div>
                </div>
                <div className='login-form'>
                    <Form method='' onSubmit={handleSubmit}>
                        <div className='email-content'>
                            <div>
                                Email:
                            </div>
                            <div className='input-email'>
                                <input 
                                name='email'
                                type="email" 
                                placeholder='name@gmail.com' 
                                onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='password-content'>
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
                        
                        <button type='submit'>
                            <div className='btn-text'>Login</div>
                        </button>
                    </Form>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}