import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './ComponentsCss/Header.css';
import Logo from './Logo.png';
import Events from './Events.png';
import Create from './Create.png';
import Explore from './Explore.png';
import Notification from './Notification.png';
import Account from './Account.png';


export default function Header() {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <div style={{width: 1187, height: 0, left: 351, top: 17, position: 'absolute', border: '1px #905D03 solid'}}></div>
        <img style={{width: 22, height: 22, left: 368, top: 31, position: 'absolute'}} src="https://via.placeholder.com/22x22" />
        <div style={{width: 50, height: 17, left: 395, top: 36, position: 'absolute', textAlign: 'center', color: '#EBC351', fontSize: 13, fontFamily: 'Google Sans', fontWeight: '500', wordWrap: 'break-word'}}>Ruffles</div>
        <div style={{width: 50, height: 17, left: 450, top: 36, position: 'absolute', textAlign: 'center', color: '#EBC351', fontSize: 13, fontFamily: 'Google Sans', fontWeight: '500', wordWrap: 'break-word'}}>Help</div>
        <div style={{width: 50, height: 17, left: 505, top: 36, position: 'absolute', textAlign: 'center', color: '#EBC351', fontSize: 13, fontFamily: 'Google Sans', fontWeight: '500', wordWrap: 'break-word'}}>Explore</div>
        <div style={{width: 163, height: 17, left: 1262, top: 36, position: 'absolute', textAlign: 'center', color: '#EBC351', fontSize: 13, fontFamily: 'Google Sans', fontWeight: '500', wordWrap: 'break-word'}}>Apply to be an Organizer</div>
        <div style={{width: 100, height: 17, left: 1438, top: 36, position: 'absolute', textAlign: 'center', color: '#EBC351', fontSize: 13, fontFamily: 'Google Sans', fontWeight: '500', wordWrap: 'break-word'}}>Admin</div>
    </div>

    );
}