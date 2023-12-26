import Button from "../../../Buttons/Button";
import { PiUserCircleLight } from "react-icons/pi";
import ToolTip from "../../../ToolTip/ToolTip";
import { useState } from "react";
import User from "./User";

function Account() {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <ToolTip classHeadless="w-[220px] rounded-md bg-white shadow-[0_2px_2px_0px_rgba(0,0,0,0.27)]" typeToolTip="TippyHeadless" items={<User />} interactive={true} isVisible={visible} placement="bottom-start" onClickOutside={handleShow}>
        <div>
          <Button icon={PiUserCircleLight} size={26} className="text-primary-200" title="Tài khoản" classButton="flex-col ml-0 mr-0 gap-0" fontMedium xl nowrap={false} onClick={handleShow} />
        </div>
      </ToolTip>
    </div>
  );
}

export default Account;
