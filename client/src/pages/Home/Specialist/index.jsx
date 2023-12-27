import Button from "../../../components/Buttons/Button";
import Carousel from "../../../components/Carousel";
import Title from "../../../components/Title/Title";
import Item from "./Item";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import { Navigation } from "swiper/modules";
import "./style.scss";
const data = [
  {
    id: 1,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png",
    description: "Gói xét nghiệm sàng lọc bệnh Sốt xuất huyết, cúm AB, covid tại nhà ",
  },
  {
    id: 2,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    description: "Dịch vụ Lấy mẫu xét nghiệm tại nhà của Phòng khám MEDLATEC TPHCM",
  },
  {
    id: 3,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w640/2023/10/10/163557-dat-lich-cham-soc-wecare247.png",
    description: "Gói xét nghiệm sàng lọc sốt xuất huyết cơ bản Medlatec tại nhà",
  },
  {
    id: 4,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    description: "Gói xét nghiệm viêm gan B tại nhà (VI-XN6TN)",
  },
];

function Specialist() {
  const { width } = useRegisterWindowSizeStore();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <Title title="Chuyên khoa" extraLarge6 className="font-[600]" nowrap={false} />
        </div>
        <div>
          <Button title="Xem thêm" background={width > 768} className="rounded-2xl p-3" xxl classTitle="text-primary-300 font-[600]" />
        </div>
      </div>
      <div className="w-full">
        <Carousel spaceBetween={20} navigation={true} modules={[Navigation]} slidesPerView={width > 768 ? 3 : 2} slides={data} component={Item} />
      </div>
    </div>
  );
}

export default Specialist;
