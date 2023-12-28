import Button from "../../../components/Buttons/Button";
import Carousel from "../../../components/Carousel";
import Title from "../../../components/Title/Title";
import useRegisterWindownSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import Item from "./Item";
import "./style.scss";

import { Navigation } from "swiper/modules";

const data = [
  {
    id: 1,
    to: "",
    image:
      "https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png",
    description: "Biện viên Hữu nghị Việt Đức",
  },
  {
    id: 2,
    to: "",
    image:
      "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    description: "Bệnh viện Chợ Rẫy",
  },
  {
    id: 3,
    to: "",
    image:
      "https://cdn.bookingcare.vn/fo/w640/2023/10/10/163557-dat-lich-cham-soc-wecare247.png",
    description: "Doctor Check - Tâm Soát Bệnh Để Sống Thọ Hơn",
  },
  {
    id: 4,
    to: "",
    image:
      "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    description: "Phòng khám Bệnh viện Đại học y Dược 1",
  },
];

const HealthFacilities = () => {
  const { width } = useRegisterWindownSizeStore();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center">
        <div className="flex-1">
          <Title
            title="Cơ sở y tế"
            extraLarge6
            className="font-[600]"
            nowrap={false}
          />
        </div>
        <div>
          <Button
            title="Xem thêm"
            background={width > 768}
            className="rounded-2xl p-3"
            xxl
            classTitle="text-primary-300 font-[600]"
          />
        </div>
      </div>
      <div className="w-full">
        <Carousel
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          slidesPerView={width > 768 ? 3 : 2}
          slides={data}
          component={Item}
        />
      </div>
    </div>
  );
};

export default HealthFacilities;
