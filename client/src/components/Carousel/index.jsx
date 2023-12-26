import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Carousel({ slides, component, ...props }) {
  const Component = component;
  return (
    <Swiper {...props}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>{Component && <Component item={slide} />}</SwiperSlide>
      ))}
    </Swiper>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  component: PropTypes.node.isRequired,
};

export default Carousel;
