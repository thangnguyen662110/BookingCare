import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import routerConfig from "../../../../config/routerConfig";
import Icon from "../../../Icon/Icon";
import Item from "./Item";
const items = [
  {
    id: "home",
    to: routerConfig.home,
    type: "button",
    name: "Tất cả",
  },
  {
    id: "atHome",
    to: routerConfig.atHome,
    type: "button",
    name: "Tại nhà",
  },
  {
    id: "atHospital",
    to: routerConfig.atHospital,
    type: "button",
    name: "Tại viện",
  },
  {
    id: "liveHealthy",
    to: routerConfig.liveHealthy,
    type: "button",
    name: "Sống khỏe",
  },
];

const itemSearch = [
  {
    id: "search",
    to: routerConfig.search,
    type: "search",
    icon: GrSearch,
    placeHolder: [
      {
        name: "Tìm bác sĩ",
      },
      {
        name: "Tìm chuyên khoa",
      },
      {
        name: "Tìm bệnh viện",
      },
      {
        name: "Tìm lý do khám",
      },
      {
        name: "Tìm phòng khám",
      },
      {
        name: "Tìm gói khám tổng quát",
      },
    ],
  },
];

function Navigation() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % itemSearch[0]?.placeHolder.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [itemSearch]);

  return (
    <div className="flex flex-col justify-around 2md:flex-row gap-4 w-full">
      <div className="flex flex-row items-center gap-4">
        {items.map((item, index) => (
          <div key={index}>
            <Item item={item} />
          </div>
        ))}
      </div>
      <div className="w-full">
        {itemSearch.map((item, index) => (
          <div key={index} className="m-[10px]">
            {item?.type === "search" && (
              <Link to={item?.to} className="flex flex-row gap-2 items-center bg-white pl-[10px] pr-[10px] border rounded-full h-[48px] w-full 2md:w-[220px]">
                <Icon icon={item?.icon} size={18} />
                <span className="text-[rgb(153,153,153)] text-[14px]">{item?.placeHolder[placeholderIndex]?.name}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
