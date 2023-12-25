import Button from "../../../Buttons/Button";
import { PiUserCircleLight } from "react-icons/pi";
function Account() {
  return (
    <div>
      <Button icon={PiUserCircleLight} size={26} className="text-primary-200" title="Tài khoản" classButton="flex-col ml-0 mr-0 gap-0" fontMedium xl nowrap={false} />
    </div>
  );
}

export default Account;
