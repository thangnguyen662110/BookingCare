import { Link } from "react-router-dom";
import Title from "../../../../Title/Title";

const items = [
  {
    id: 1,
    name: "",
    menu: [
      {
        to: "",
        name: "Trang Chủ",
      },
      {
        to: "",
        name: "Cẩm nang",
      },
      {
        to: "",
        name: "Liên hệ hợp tác",
      },
      {
        to: "",
        name: "Sức khỏe doanh nghiệp",
      },
      {
        to: "",
        name: "Gói chuyển đổi số doanh nghiệp",
      },
      {
        to: "",
        name: "Tuyển dụng",
      },
    ],
  },
  {
    id: 2,
    name: "Về BookingCare",
    menu: [
      {
        to: "",
        name: "Dành cho bệnh nhân",
      },
      {
        to: "",
        name: "Dành cho bác sĩ",
      },
      {
        to: "",
        name: "Vai trò của BookingCare",
      },
      {
        to: "",
        name: "Liên hệ",
      },
      {
        to: "",
        name: "Câu hỏi thường gặp",
      },
      {
        to: "",
        name: "Điều khoản sử dụng",
      },
      {
        to: "",
        name: "Quy trình hỗ trợ giải quyết khiếu nại",
      },
      {
        to: "",
        name: "Quy chế hoạt động",
      },
    ],
  },
];

function MenuItem() {
  return (
    <div className="mb-10">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col">
          {item?.name && <div className="uppercase pl-[10px] bg-gray-200 text-[12px] pt-[2px] pb-[2px]">{item?.name}</div>}
          {item?.menu &&
            item?.menu.map((menuItem, index) => (
              <Link to={item?.to} key={index} className="flex border-b text-primary-200 hover:bg-primary-25 duration-300 pt-[8px] pb-[8px] pr-[12px] pl-[12px]">
                <div>
                  <Title title={menuItem?.name} xxxl nowrap={false} />
                </div>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default MenuItem;
