import Icon from "../../../components/Icon/Icon";
import Button from "../../../components/Buttons/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import SearchModal from "../../../components/Modals/SearchModal/SearchModal";
import useRegisterSearchModal from "../../../hooks/Search/useRegisterSearchModal";
import Body from "./Body";
const data = [
  {
    id: "All",
    name: "Tất cả",
  },
  {
    id: "All",
    name: "Chuyên khoa",
  },
  {
    id: "All",
    name: "Cơ sở y tế",
  },
  {
    id: "All",
    name: "Bác sĩ",
  },
  {
    id: "All",
    name: "Gói khám tổng quát/chụp/nội soi",
  },
  {
    id: "All",
    name: "Gói xét nghiệm",
  },
  {
    id: "All",
    name: "Gói phẩu thuật",
  },
  {
    id: "All",
    name: "Lý do khám",
  },
];

function Header() {
  const { onOpen } = useRegisterSearchModal();

  const handleShowSearchModal = () => {
    onOpen();
  };
  return (
    <div className="flex flex-row items-center bg-secondary-600 border rounded-full w-full">
      <div className="flex flex-row items-center w-full">
        <Icon icon={GrSearch} classIcon="pt-[10px] pb-[10px] pl-4 pr-4" />
        <input type="text" className="text-[14px] pt-[10px] pb-[10px] w-full border-none focus:outline-none bg-transparent" />
        <div className="pt-[10px] pb-[10px] pl-3 pr-3 border-l mt-1 mb-1 border-black">
          <Button onClick={handleShowSearchModal} title="Tất cả" icon={MdKeyboardArrowDown} titlePosition="before" xl size={18} />
        </div>
      </div>

      <SearchModal body={<Body data={data} />} classBody="w-full bottom-0" bottom />
    </div>
  );
}

export default Header;
