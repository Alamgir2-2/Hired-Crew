import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import JobList from './components/JobList/JobList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>
      },

      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'AppliedJob',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'job/:id',
        element:<JobDetails></JobDetails>
      },
      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
