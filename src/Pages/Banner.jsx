import React from "react";
// import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        autoplay={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          {" "}
          <img src={banner2} className="min-h-screen" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner3} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner2} />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
