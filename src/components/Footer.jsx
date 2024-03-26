import * as React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsCss/Footer.css';
import Apply from './Apply to be an Organizer.png';
import Ruffles from './Ruffles.png';

export default function Footer(){
    return(
            <footer className='footer-class'>
                <div className='footer-container'>
                    <div className='footer-content-left'>
                        <div className='footer-left-contents'>
                            <Link to={''} className='links'><img src={Ruffles} alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className='footer-content-right'>
                        <Link className='links'><img src={Apply} alt="Logo" /></Link>
                    </div>
                </div>
                
            </footer>
    );
    
    }
