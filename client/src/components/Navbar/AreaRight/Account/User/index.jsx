import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Contexts/AppUserProvider";
import { CiLogin, CiLogout } from "react-icons/ci";
import { GiArchiveRegister } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Item from "./Item";
import useRegisterLoginModals from "../../../../../hooks/Navbar/Login/useRegisterLoginModal";

const accounts = [
  {
    name: "Đăng nhập",
    icon: CiLogin,
    action: useRegisterLoginModals,
  },
  {
    name: "Đăng ký",
    icon: GiArchiveRegister,
    action: useRegisterLoginModals,
  },
];

const users = [
  {
    to: "/ho-so",
    name: "Hồ sơ",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    to: "/dang-xuat",
    name: "Đăng xuất",
    icon: CiLogout,
  },
];

function User() {
  const { user } = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <div>
      {Object.keys(currentUser).length > 0 ? (
        <div className="pt-2 pb-2">
          {users.map((user, index) => (
            <Item item={user} key={index} />
          ))}
        </div>
      ) : (
        <div className="pt-2 pb-2">
          {accounts.map((account, index) => (
            <Item item={account} key={index} useRegister={account?.action} />
          ))}
        </div>
      )}
    </div>
  );
}

export default User;
