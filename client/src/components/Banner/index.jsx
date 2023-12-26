import Carousel from "../Carousel";
import Item from "./Item";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./style.css";
const data = [
  {
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png",
    title: "Avatar: The Way of Water",
  },
  {
    image: "https://cdn.bookingcare.vn/fo/w640/2023/11/02/103728-med247.png",
    title: "Black Adam",
  },
  {
    image: "https://cdn.bookingcare.vn/fo/w1920/2023/12/06/161403-xet-nghiem-nipt-medlatec-2.png",
    title: "Black Panther: Wakanda Forever",
  },
  {
    image: "https://cdn.bookingcare.vn/fo/2023/09/07/141422-144204-dat-lich-kham-bookingcare-pharmacity.jpg",
    title: "Avatar: The Way of Water",
  },
  {
    image: "https://cdn.bookingcare.vn/fo/w640/2023/10/10/163557-dat-lich-cham-soc-wecare247.png",
    title: "Black Adam",
  },
];
function Banner() {
  return (
    <div className="w-full bg-primary-25">
      <div className="w-full pr-2 pl-2">
        <div className="mx-auto w-full lg:max-w-[var(--max-width)] bg-primary-25 p-[10px]">
          <Carousel
            slides={data}
            component={Item}
            className="rounded-[32px] pb-8"
            spaceBetween={0}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
