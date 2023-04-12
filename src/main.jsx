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
import JobDetail from './components/Layout/Outlets/Home/JobCard/JobDetail/JobDetail';
import Statistics from './components/Layout/Outlets/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const [categoryResponse, jobsResponse] = await Promise.all([
            fetch('/category.json'),
            fetch('/jobs.json')
          ]);
      
          const categoryData = await categoryResponse.json();
          const jobsData = await jobsResponse.json();
      
          return { categoryData, jobsData };
        }
      },
      {
        path: '/jobs/:id',
        element: <JobDetail></JobDetail>,
        loader: async ({params}) => {
          const res = await fetch("/jobs.json");
          const data = await res.json();
          const jobDetail = data.find(singleJobDetail => singleJobDetail.id == params.id);
          return jobDetail;
        }
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
