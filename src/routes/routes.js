import AddService from "../components/AddService/AddService";
import Blogs from "../components/Blogs/Blogs";
import Error404 from "../components/Error404/Error404";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviewEdit from "../components/MyReviewEdit/MyReviewEdit";
import MyReviews from "../components/MyReviews/MyReviews";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import Services from "../components/Services/Services";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                errorElement: <Error404></Error404>
            },
            {
                path: '/services',
                element:<Services></Services>,
                errorElement: <Error404></Error404>
            },
            {
                path: '/services/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader: async({params}) =>{
                    return fetch(`https://service-server-seven.vercel.app/services/${params.id}`)
                },
                errorElement: <Error404></Error404>
            },
            {
                path: '/editreview/:id',
                element:<MyReviewEdit></MyReviewEdit>,
                loader: async({params}) =>{
                    return fetch(`https://service-server-seven.vercel.app/editreview/${params.id}`)
                },
                errorElement: <Error404></Error404>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>,
                errorElement: <Error404></Error404>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                errorElement: <Error404></Error404>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                errorElement: <Error404></Error404>
            },
            {
                path: '/login',
                element: <Login></Login>,
                errorElement: <Error404></Error404>
            },
            {
                path: '/register',
                element: <Register></Register>,
                errorElement: <Error404></Error404>
            }
        ],
        errorElement: <Error404></Error404>
    }
])

export default router;