import React from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PendingPage from '../pages/PendingPage'
import ContactUs from './../pages/ContactUs';
import StockLayout from '../Layout/StockLayout'
import StockUserProfile from '../pages/StockDashboard/StockUserProfile'
import Medicines from './../pages/StockDashboard/Medicines';
import NotFound from '../pages/NotFound'
import Orders from './../pages/StockDashboard/Orders';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'pending',
        element: <PendingPage />
      },
      {
        path: 'StockDashboard',
        element: <StockLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" replace />
          },
          {
            path: "profile",
            element: <StockUserProfile />,
          },
          {
            path: "Medicines",
            element: <Medicines />,
          },
          {
            path: "Orders",
            element: <Orders />,
          },
        ]
      },
      {
        path: '*',
        element: <NotFound/>
      },
    ]
  },
])
export default routes