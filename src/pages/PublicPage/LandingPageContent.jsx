import * as React from 'react';
import {Link} from 'react-router-dom';
import './PublicPageCss/LandingPageContent.css';
import PlantekwLogo from './PlantekwLogo.png';
import CustomButton from './CustomButton'; 

export default function LandingPageContent(){

    const handleClick = () => {
        // Handle button click event
      };

      
    return(
        
            <div className='container2'>
            <Link to={'/'} className='Plantek'><img src={PlantekwLogo} alt="Plantek" /></Link>
            <div className='title'>Teknoys Unite! Plan the Perfect Event with PlanTek.</div>
            <div className='subtitle'>Turn Event Planning from Stress to Success</div>
            <div className='buttonc'>
                <CustomButton onClick={handleClick}><Link to={'EventBrowser'} className='ViewEvent' >Explore Events</Link></CustomButton>
                
            </div>
        </div>
    
    )
}