import './App.css';
import * as React from 'react';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LandingPage from './pages/PublicPage/LandingPage';
import ErrorPage from './error-page';
import LoginPage from './pages/PublicPage/LoginPage';
import EventBrowserPage from './pages/PublicPage/EventBrowserPage';
import SignUpPage from './pages/PublicPage/SignUpPage';
import LandingPageContent from './pages/PublicPage/LandingPageContent';
import Header from './components/Header';
import Dashboard from './pages/Authenticated/Dashboard';
import OrganizerDashboard from './pages/Organizer/OrganizerDashboard';
import ProfilePage from './pages/Authenticated/ProfilePage';
import AdminDashboard from './pages/Administrator/AdminDashboard';
import AdminLogin from './pages/Administrator/AdminLogin';
import AdminHeader from './pages/Administrator/AdminHeader';
import EventCreationPage from './pages/Authenticated/EventCreationPage';
import Footer from './components/Footer';
import OrganizerDashboardAccepted from './pages/Organizer/OrganizerDashboardAccepted';
import Notification from './pages/Authenticated/Notification';
import AdminNotif from './pages/Administrator/AdminNotif';




const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPageContent />
      },
      {
        path: 'Login',
        element: <LoginPage />,
      },
      {
        path: 'SignUp',
        element: <SignUpPage />,
      },
      {
        path: 'EventBrowser',
        element: <EventBrowserPage />,
      },
    ],
  },
  {
    path: 'Home',
    element: <Header />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:'',
        element: <div><Dashboard /> <Footer /></div>,
      },
      {
        path: 'OrganizeEvents', // jqifiqngojaf
        element: <div><OrganizerDashboard /> <Footer /></div>

      },
      {
        path:'BrowseEvents',
        element:<div><EventBrowserPage /></div>,
      },
      {
        path:'Profile',
        element:<ProfilePage />
      },
      {
        path:'OrganizeDashboard/CreateEvent',
        element: <EventCreationPage />
      },
      {
        path:'OrganizeDashboard',
        element:<OrganizerDashboardAccepted />, 
      },
      {
        path:'Notifications',
        element:<Notification />
      }
    ]
  },
  {
    path: 'admin',
    element: <AdminLogin />,
    errorElement: <ErrorPage />,
    
  },
 {
  path: 'AdminDashboard',
  element: <div><AdminHeader/> <AdminDashboard /></div> ,
  errorElement: <ErrorPage />,
  
 },
  //test rani na route to see the contents
  
  {
    path:'footer',
    element: <Footer />,
    errorElement: <ErrorPage />,
  },

 {
  path:'AdminNotifications',
  element: <div><AdminHeader/> <AdminNotif /> </div>
 }
  
]);


function App() {
  return (
    <div className='App' style={{
      background: 'linear-gradient(to bottom, #F2F2F2, #FFFDD9)',
      /* Other styles for your element */
      width: '100%',
      height: '100vh', // Adjust height as needed
    }}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
