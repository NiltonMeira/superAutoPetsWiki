import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { Foods } from "../pages/foods/foods";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:
        <App>
            <Home/>   
        </App>
    },
    {
        path: "/login",
        element:
        <App>
            <Login/>
        </App>
    },
    {
        path: "/pets",
        element: 
        <App>
            <></>
        </App>
    },
    {
        path: "/foods",
        element:
        <App>
            <Foods/>
        </App>
    }
])

export default MainRoutes