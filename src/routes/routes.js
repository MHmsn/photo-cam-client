import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/services',
                element:<></>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path: '/reviews',
                element: <></>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <></>
            }
        ]
    }
])

export default router;