import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../pages/AddJobs";
import ErrorPages from "../components/ErrorPages";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";


console.log(import.meta.env.VITE_API_UR);
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            // loader:()=>fetch(`http://localhost:5000/jobs`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/job/:id',
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
            path: '/update/:id',
            element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
            loader: ({ params }) =>
              fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
          },
        {
            path:'/add-job',
            element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            
        },
        {
            path:'/my-posted-jobs',
            element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            
        },
        {
            path:'/my-bids',
            element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
            
        },
        {
            path:'/bid-request',
            element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
            
        },
        {
            path:'/jobs',
            element:<AllJobs></AllJobs>
            
        }
    ]
  }
])

export default router;