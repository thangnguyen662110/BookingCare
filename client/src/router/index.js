import DefaultLayout from "../components/Layout/DefaultLayout";
import routerConfig from "../config/routerConfig";
import AtHome from "../pages/AtHome";
import AtHospital from "../pages/AtHospital";
import Home from "../pages/Home";
import LiveHealthy from "../pages/LiveHealthy";
import Login from "../pages/Login";

const publicRouterPathComponent = [
  {
    path: routerConfig.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: routerConfig.atHome,
    component: AtHome,
    layout: DefaultLayout,
  },
  {
    path: routerConfig.atHospital,
    component: AtHospital,
    layout: DefaultLayout,
  },
  {
    path: routerConfig.liveHealthy,
    component: LiveHealthy,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: DefaultLayout,
  },
];

export default publicRouterPathComponent;
