
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Adventures from "../pages/Adventures";
import Details from "../components/Details";
import MyProfile from "../pages/MyProfile";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: "/myProfile",
            element: <MyProfile></MyProfile>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/details/:id",
            element: <Details></Details>,
            loader: async({params})=>{
                const res = await fetch("/adventure.json")
                const data = await res.json()
                const singleData = await data.find(d => d.id == params.id)

                return singleData;
            }
        }
      ]
    },
  ]);

export default router;