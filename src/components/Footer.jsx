import * as React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsCss/Footer.css';

export default function Footer(){
    return(
        <div className='footer-wrapper'>
            <footer className='footer-class'>
                <div className='footer-container'>
                    <div className='footer-content-left'>
                        <div className='logo'><Link className='links'>Logo</Link></div>
                        <div className='footer-left-contents'>
                            <Link to={''} className='links'>Ruffles</Link>
                            <Link to={""} className='links'>Help</Link>
                            <Link to={''} className='links'>About Us</Link>
                        </div>
                    </div>
                    <div className='footer-content-right'>
                        <Link className='links'>Fb</Link>
                        <Link className='links'>Github</Link>
                    </div>
                </div>
                
            </footer>
        </div>
    )
