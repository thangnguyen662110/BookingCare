import DefaultLayout from "../components/Layout/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";


const publicRouterPathComponent = [
    {
        path: "/",
        component: Home,
        layout: DefaultLayout
    },
    {
        path: "/login",
        component: Login,
        layout: DefaultLayout
    },
]

export default publicRouterPathComponent;