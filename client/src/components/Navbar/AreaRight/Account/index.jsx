import Button from "../../../Buttons/Button";
import { PiUserSwitchFill } from "react-icons/pi";
import ToolTip from "../../../ToolTip/ToolTip";
import { useEffect, useState } from "react";
import User from "./User";
import LoginModal from "../../../Modals/LoginModal";
import useRegisterLoginModal from "../../../../hooks/Navbar/Login/useRegisterLoginModal";
import Login from "./Login";
function Account() {
  const [visible, setVisible] = useState(false);
  const { isOpen } = useRegisterLoginModal();

  const handleShow = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setVisible(false);
  }, [isOpen]);

  return (
    <div>
      <ToolTip classHeadless="w-[220px] rounded-md bg-white shadow-[0_2px_2px_0px_rgba(0,0,0,0.27)]" typeToolTip="TippyHeadless" items={<User />} interactive={true} isVisible={visible} placement="bottom-start" onClickOutside={handleShow}>
        <div>
          <Button icon={PiUserSwitchFill} size={26} className=" text-primary-200" title="Tài khoản" classButton="flex-col ml-0 mr-0 gap-0" fontMedium xl nowrap={false} onClick={handleShow} />
        </div>
      </ToolTip>

      <LoginModal icon body={<Login />} classBody="inset-0 w-full md:w-[568px] rounded-tl-lg rounded-tr-lg md:rounded-lg mx-auto mt-20 mb-0 md:mt-10 md:mb-10" classClose="p-2 border-b border-primary-200" />
    </div>
  );
}

export default Account;
