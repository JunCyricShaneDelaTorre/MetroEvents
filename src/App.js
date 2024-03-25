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
import EventCreationPage from './pages/Authenticated/EventCreationPage';
import Footer from './components/Footer';




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
        element: <Dashboard />,
      },
      {
        path: 'OrganizeEvents',
        element: <OrganizerDashboard />

      },
      {
        path:'BrowseEvents',
        element:<EventBrowserPage />,
      },
      {
        path:'Profile',
        element:<ProfilePage />
      }
    ]
  },
  //test rani na route to see the contents
  {
    path:'CreateEvent',
    element: <EventCreationPage />,
    errorElement: <ErrorPage />,
  },
  {
    path:'footer',
    element: <Footer />,
    errorElement: <ErrorPage />,
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
