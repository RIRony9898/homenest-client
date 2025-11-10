import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import About from "../Pages/About";
import AddProperty from "../Pages/AddProperty";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";
import News from "../Pages/News";
import Property from "../Pages/Property";
import PropertyDetails from "../Pages/PropertyDetails";
import Register from "../Pages/Register";
import UpdateProperty from "../Pages/UpdateProperty";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property",
        element: <Property />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-properties",
        element: (
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-properties",
        element: (
          <PrivateRoute>
            <MyProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-property/:id",
        element: (
          <PrivateRoute>
            <UpdateProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-ratings",
        element: (
          <PrivateRoute>
            <MyRatings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
