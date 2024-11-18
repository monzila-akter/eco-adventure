
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Adventures from "../pages/Adventures";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/adventure.json")
        },
        {
             path: "/adventures",
             element: <Adventures></Adventures>,
             loader: () => fetch("/adventure.json")
        },
        {
            path: "/updateProfile",
            element: <UpdateProfile></UpdateProfile>
        },
        {
            path: "/userProfile",
            element: <UserProfile></UserProfile>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;