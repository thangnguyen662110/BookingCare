import Icon from "../../../components/Icon/Icon";
import Button from "../../../components/Buttons/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import SearchModal from "../../../components/Modals/SearchModal/SearchModal";
import useRegisterSearchModal from "../../../hooks/Search/useRegisterSearchModal";
import Body from "./Body";
import { useNavigate, useSearchParams } from "react-router-dom";
import routerConfig from "../../../config/routerConfig";
import { useEffect, useState } from "react";
import useDebounced from "../../../hooks/useDebounced";
import { SearchService } from "../../../api/Search/SearchService";
import useRegisterSearchResults from "../../../hooks/Search/useRegisterSearchResults";

const data = [
  {
    id: "",
    name: "Tất cả",
  },
  {
    id: "chuyen-khoa",
    name: "Chuyên khoa",
  },
  {
    id: "co-so-y-te",
    name: "Cơ sở y tế",
  },
  {
    id: "bac-si",
    name: "Bác sĩ",
  },
  {
    id: "goi",
    name: "Gói khám tổng quát/chụp/nội soi",
  },
  {
    id: "xet-nghiem",
    name: "Gói xét nghiệm",
  },
  {
    id: "xet-nghiem",
    name: "Gói phẩu thuật",
  },
  {
    id: "ly-do-kham",
    name: "Lý do khám",
  },
];

function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { onOpen, onClose } = useRegisterSearchModal();
  const { setLoading, setSearchResult } = useRegisterSearchResults();

  const currentValue = searchParams.get("tukhoa") || "";
  const currentType = searchParams.get("loai") || "";

  const [searchValue, setSearchValue] = useState(currentValue);
  const [searchType, setSearchType] = useState(currentType);

  const debouncedValue = useDebounced(searchValue, 1000);

  const handleShowSearchModal = () => {
    onOpen();
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await SearchService(debouncedValue);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleSearch = (e) => {
    const value = e.target.value;
    if (!value.startsWith(" ")) {
      setSearchValue(value);
    }
  };

  useEffect(() => {
    const navigateToSearch = async () => {
      navigate(`${routerConfig.search}?tukhoa=${searchValue}&loai=${searchType}`);
    };

    navigateToSearch();
  }, [searchValue, searchType]);

  const handleClick = (id) => {
    setSearchType(id);
    onClose();
  };

  return (
    <div className="flex flex-row items-center bg-secondary-600 border rounded-full w-full">
      <div className="flex flex-row items-center w-full">
        <Icon icon={GrSearch} classIcon="pt-[10px] pb-[10px] pl-4 pr-4" />
        <input value={searchValue} onChange={handleSearch} type="text" className="text-[14px] pt-[10px] pb-[10px] w-full border-none focus:outline-none bg-transparent" />
        <div className="pt-[10px] pb-[10px] pl-3 pr-3 border-l mt-1 mb-1 border-black">
          <Button onClick={handleShowSearchModal} title={data.find((d) => d.id === searchType).name} icon={MdKeyboardArrowDown} titlePosition="before" xl size={18} />
        </div>
      </div>

      <SearchModal body={<Body data={data} onClick={handleClick} />} classBody="w-full bottom-0" bottom />
    </div>
  );
}

export default Header;
