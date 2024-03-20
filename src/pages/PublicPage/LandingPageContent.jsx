import * as React from 'react';
import {Link} from 'react-router-dom';
import './PublicPageCss/LandingPageContent.css';

export default function LandingPageContent(){
    return(
        <div className='landing-page'>
            <div className='content-container'>
                <h1>Welcome!</h1>
                <Link to={'EventBrowser'} className='ViewEvent' >View Events Here!</Link>
            </div>
    
        </div>
    )
}