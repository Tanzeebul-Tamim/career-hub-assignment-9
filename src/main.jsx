import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Main from './components/Layout/Main';
import AppliedJobs from './components/Layout/Outlets/AppliedJobs/AppliedJobs';
import Blog from './components/Layout/Outlets/Blog/Blog';
import Home from './components/Layout/Outlets/Home/Home';
import Statistics from './components/Layout/Outlets/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
