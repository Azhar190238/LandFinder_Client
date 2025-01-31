import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Layouts/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Contact from './Components/Layouts/Contact';
import Profile from './Components/Layouts/Profile';
import AuthProvider from './Providers/AuthProvider';
import LandDetails from './Components/Layouts/LandDetails';
import PrivateRoute from './Providers/PrivateRoute';
import ErrorPage from './Components/Error/ErrorPage';
import Location from './Components/Layouts/Location/Location';
import About from './Components/Layouts/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Land.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/location',
        element: <Location></Location>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
    
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/Land/:id',
        element: <PrivateRoute><LandDetails></LandDetails></PrivateRoute>,
        loader: () => fetch('/Land.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
