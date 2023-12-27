import Title from "../../../components/Title/Title";
import Image from "../../../components/Image/Image";

import { Link } from "react-router-dom";

const items = [
  {
    to: "",
    name: "Khám Chuyên khoa",
    icon: "/images/icon-kham-chuyen-khoa.png",
  },
  {
    to: "",
    name: "Khám từ xa",
    icon: "/images/icon-kham-tu-xa.png",
  },
  {
    to: "",
    name: "Khám tổng quát",
    icon: "/images/icon-kham-tong-quan.png",
  },
  {
    to: "",
    name: "Xét nghiệm y học",
    icon: "/images/icon-xet-nghiem-y-hoc.png",
  },
  {
    to: "",
    name: "Sức khỏe tinh thần",
    icon: "/images/icon-suc-khoe-tinh-than.png",
  },
  {
    to: "",
    name: "Khám nha khoa",
    icon: "/images/icon-kham-nha-khoa.png",
  },
  {
    to: "",
    name: "Gói Phẩu thuật",
    icon: "/images/icon-goi-phau-thuat.png",
  },
  {
    to: "",
    name: "Sống khỏe Tiểu đường",
    icon: "/images/icon-song-khoe-tieu-duong.png",
  },
  {
    to: "",
    name: "Bài Test Sức khỏe",
    icon: "/images/icon-bai-test-suc-khoe.png",
  },
  {
    to: "",
    name: "Y tế gần bạn",
    icon: "/images/icon-near-home.png",
  },
];

function Service() {
  return (
    <div className="flex flex-col gap-4 ">
      <Title title="Dịch vụ toàn diện" extraLarge6 className="font-[600]" />
      <div className="flex-1 flex-wrap justify-between items-center flex min-h-0 min-w-0 list-none box-border relative m-0 p-0">
        {items.map((item, index) => (
          <Link to={item?.to} className="relative w-[48%] h-[80px] md:h-[100px] mb-4 border-[2px] border-[rgb(242,242,242)] rounded-[32px]" key={index}>
            <div className="relative w-full h-full">
              <Image src="/images/background-service.png" className="absolute w-full h-full object-cover inset-0 bg-transparent rounded-[32px] " />
              <div className="flex flex-row items-center absolute inset-1 md:inset-2 2md:inset-3 lg:inset-4 2lg:inset-5">
                {item?.icon && (
                  <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full " style={{ background: "radial-gradient(circle, rgb(255, 211, 84), rgb(255, 239, 195), rgb(254, 253, 251), rgb(255, 255, 255)" }}>
                    <div className="md:w-[70%] w-[50%] h-[50%] md:h-[70%]">
                      <Image src={item?.icon} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
                <Title title={item?.name} className="ml-4 font-medium 2md:font-[600] text-[14px] md:text-[16px] lg:text-[24px]" nowrap={false} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Service.propTypes = {};

export default Service;
