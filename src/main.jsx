import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Roots from './components/Roots'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorPage: <ErrorPage/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/home",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
