import DefaultLayout from "../components/Layout/DefaultLayout";
import SearchLayout from "../components/Layout/SearchLayout";
import routerConfig from "../config/routerConfig";
import AtHome from "../pages/AtHome";
import AtHospital from "../pages/AtHospital";
import Home from "../pages/Home";
import LiveHealthy from "../pages/LiveHealthy";
import Login from "../pages/Login";
import Search from "../pages/Search";

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
    path: routerConfig.search,
    component: Search,
    layout: SearchLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: DefaultLayout,
  },
];

export default publicRouterPathComponent;
