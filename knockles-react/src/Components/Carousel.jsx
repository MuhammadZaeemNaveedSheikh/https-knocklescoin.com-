import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import MemeOne from "../static/memes/1.png";
import MemeTwo from "../static/memes/2.png";
import MemeThree from "../static/memes/5.png";
import MemeFour from "../static/memes/6.png";
import MemeFive from "../static/memes/7.png";
import MemeSix from "../static/memes/8.png";
import NextBtn from "../static/next.png";
import PrevBtn from "../static/prev.png";
import { useCallback, useRef } from "react";

const Carousel = () => {
  const swiperParams = {
    direction: "horizontal",
    slidesPerView: "1",
    spaceBetween: "20px",
    modules: [Pagination, Navigation],
    centeredSlides: true,
    pagination: {
      type: "fraction",
      clickable: false,
    },
    speed: 800,
  };

  const sliderRef = useRef(null);
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleChange = (el) => {
    if (el.activeIndex === 0) prevRef.current.style.opacity = "0.6"
    else prevRef.current.style.opacity = "1"
    if (el.activeIndex === slides.length-1) nextRef.current.style.opacity = "0.6"
    else nextRef.current.style.opacity = "1"
  }

  return (
    <>
      <Swiper {...swiperParams} className="meme_slider" ref={sliderRef} onRealIndexChange={(el)=>handleChange(el)}>
        {slides.map((key) => {
          return (
            <SwiperSlide key={key} className="meme_slide">
              <div>
                <img src={MemeOne} alt="Meme One" />
                <img src={MemeTwo} alt="Meme Two" />
              </div>
              <div>
                <img src={MemeThree} alt="Meme One" />
                <img src={MemeFour} alt="Meme Two" />
              </div>
              <div>
                <img src={MemeFive} alt="Meme One" />
                <img src={MemeSix} alt="Meme Two" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="nav_buttons">
        <button id="left" onClick={handlePrev} ref={prevRef}>
          <img src={PrevBtn} alt="" />
        </button>
        <button id="right" onClick={handleNext} ref={nextRef}>
          <img src={NextBtn} alt="" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
