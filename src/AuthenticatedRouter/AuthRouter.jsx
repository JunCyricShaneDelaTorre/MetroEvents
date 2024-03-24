import * as React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import ErrorPage from '../error-page';
import Header from '../components/Header';
import Dashboard from '../pages/Authenticated/Dashboard';
import OrganizerDashboard from '../pages/Organizer/OrganizerDashboard';
import EventBrowserPage from '../pages/PublicPage/EventBrowserPage';

const router = createBrowserRouter([
    {
        path:'/Home',
        element:<Header />,
        errorElement:<ErrorPage />,
        children: [
            {
                path:'',
                element:<Dashboard />,

            },
            {
                path:'OrganizeEvents',
                element:<OrganizerDashboard />,
            },
            {
                path:'BrowseEvents',
                element:<EventBrowserPage />,
            },
        ],
    },
]);

export default function AuthRouter(){
    return(
        <div className='auth-router'>
            <RouterProvider router={router}/>
        </div>
    )
}