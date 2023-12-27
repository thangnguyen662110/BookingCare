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
    description: "Cơ xương khớp",
  },
  {
    id: 2,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    description: "Cơ thần kinh",
  },
  {
    id: 3,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w640/2023/10/10/163557-dat-lich-cham-soc-wecare247.png",
    description: "Tiêu hóa",
  },
  {
    id: 4,
    to: "",
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    description: "Tim mạch",
  },
  {
    id: 5,
    to: "",
    image: "",
    description: "Tai mũi hong",
  },
  {
    id: 6,
    to: "",
    image: "",
    description: "Cột sống",
  },
  {
    id: 7,
    to: "",
    image: "",
    description: "Y học Cỗ truền",
  },
  {
    id: 5,
    to: "",
    image: "",
    description: "Châm cứu",
  },
  {
    id: 5,
    to: "",
    image: "",
    description: "Sản phụ khoa",
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
