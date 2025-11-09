import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Property from "../Pages/Property";
import News from "../Pages/News";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import UserProfile from "../Pages/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/property',
                element: <Property/>
            },
            {
                path: '/news',
                element: <News/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/profile',
                element: <UserProfile/>
            }
        ]
    }
])

export default router;