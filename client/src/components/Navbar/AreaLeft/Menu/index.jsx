import { Link } from "react-router-dom";
import Icon from "../../../Icon/Icon";
import Button from "../../../Buttons/Button";
import { logo } from "../../../../assets";
import { IoMenu } from "react-icons/io5";
import routesConfig from "../../../../config/routerConfig";

function Menu() {
  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <Button icon={IoMenu} size={48} classIcon="text-gray-300" />
      </div>
      <Link className="w-[200px] h-12" to={routesConfig.home}>
        <Icon icon={logo} />
      </Link>
    </div>
  );
}

export default Menu;
