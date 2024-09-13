import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";

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
    }
])

export default MainRoutes