import * as React from 'react';
import './AdminCss/AdminDashboard.css'

export default function AdminDashboard(){
    return(
        <div className='admin-dashboard-wrapper'>
            <div className='admin-dashboard-container'>
                    <div className='admin-dashboard-header'>
                        <h2>Requests</h2>
                    </div>
                    <div className='admin-dashboard-content'>
                        <div className='name-status-action'>
                            <div className='name-container'>
                                <div>Name</div>
                            </div>
                            <div className='status-and-action-container'>
                                <div>Status</div>
                                <div>Action</div>
                            </div>
                        </div>

                        <div className='test-requests'>
                                <div className='test-item'>john</div>
                                <div className='test-item'>doe</div>
                                <div className='test-item'>sheesh</div>
                            </div>
                    </div>
            </div>
        </div>
    )
}