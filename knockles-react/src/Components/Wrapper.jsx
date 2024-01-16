import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import Home from "./Home";
import Ourstory from "./Ourstory";
import Tokenomics from "./Tokenomics";
import Knockles from "./Knockles";
import Follow from "./Follow";
import { useEffect, useRef } from "react";
import Memes from "./Memes";

const Wrapper = ({ activeIndex, setActiveIndex }) => {
  const swiperRef = useRef();
  function changeIndex(element) {
    setActiveIndex(element.activeIndex);
  }
  const swiperParams = {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    speed: 1000,
    modules: [Mousewheel],
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  useEffect(() => {
    swiperRef.current.swiper.slideTo(activeIndex);
  }, [activeIndex]);
  return (
    <>
      <Swiper
        {...swiperParams}
        id="slider"
        ref={swiperRef}
        onRealIndexChange={(element) => changeIndex(element)}
      >
        <SwiperSlide className="swiper-slide">
          <Home />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Ourstory />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Memes />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Tokenomics />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Knockles />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Follow />
        </SwiperSlide>
      </Swiper>
      <div className="wrapper">
        <Home />
        <Ourstory />
        <Memes />
        <Tokenomics />
        <Knockles />
        <Follow />
      </div>
    </>
  );
};

export default Wrapper;
