import Carousel from "../Carousel";
import Item from "./Item";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./style.css";
const data = [
  {
    image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    title: "Avatar: The Way of Water",
  },
  {
    image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    title: "Black Adam",
  },
  {
    image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    title: "Black Panther: Wakanda Forever",
  },
  {
    image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    title: "Avatar: The Way of Water",
  },
  {
    image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    title: "Black Adam",
  },
  {
    image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    title: "Black Panther: Wakanda Forever",
  },
];
function Banner() {
  return (
    <div className="w-full bg-primary-25">
      <div className="w-full pr-4 pl-4">
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
