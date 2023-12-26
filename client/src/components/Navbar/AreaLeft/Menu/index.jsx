import { Link } from "react-router-dom";
import Icon from "../../../Icon/Icon";
import Button from "../../../Buttons/Button";
import { logo } from "../../../../assets";
import { IoMenu } from "react-icons/io5";
import routesConfig from "../../../../config/routerConfig";
import useRegisterMenuModal from "../../../../hooks/Navbar/Menu/useRegisterMenuModal";
import MenuModal from "../../../Modals/MenuModal/MenuModal";
import MenuItem from "./MenuItem";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";

function Menu() {
  const { onOpen } = useRegisterMenuModal();

  const { width } = useRegisterWindowSizeStore();

  const handleShowMenu = () => {
    onOpen();
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <div>
        <Button icon={IoMenu} size={width > 900 ? 48 : 32} classButton="ml-0 mr-0" classIcon="text-gray-300" onClick={handleShowMenu} />
      </div>
      <MenuModal body={<MenuItem />} classBody="left-0 w-[240px] p-0" left />
      <Link className="flex items-center w-[160px] 2md:w-[200px] h-12" to={routesConfig.home}>
        <Icon icon={logo} />
      </Link>
    </div>
  );
}

export default Menu;
