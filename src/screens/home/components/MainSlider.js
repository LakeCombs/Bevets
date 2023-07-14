import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/slider.css";
import Slider6 from "../imgs/Slide6.png";
import Slider2 from "../imgs/slider2.png";
import Slider3 from "../imgs/slider3.png";

const sliderData = [
  {
    img: Slider6,
    pretittle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now!",
  },
  {
    img: Slider6,
    pretittle: "We Deliver",
    titlePart1: "Same Day",
    titlePart2: "Delivery",
    titlePart3: "",
    caption: "On all orders within Accra",
    btnText: "Shop now!",
  },
  {
    img: Slider6,
    pretittle: "Shop Now",
    titlePart1: "Get all ",
    titlePart2: "Essentials from",
    titlePart3: "Bevets",
    btnText: "Shop now!",
  },
];

const MainSlider = () => {
  return (
  <div className="w-full max-w-lg lg:max-w-[834px] mx-auto">
      <Swiper
      loop={true}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">{slide.pretittle}</div>
                  <div className="text-3xl md:text-[46px] font-semibold  font-mont uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="btn btn-accent mx-auto lg:mx-0 ">Shop Now</button>
                </div>
                <div className="flex-1">
                  <img
                    className="xl:absolute xl:-right-16 xl:-bottom-12"
                    src={slide.img}
                    width={600}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  </div>
  );
};

export default MainSlider;