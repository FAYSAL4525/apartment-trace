import React from 'react';
import './Header.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
// import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  EffectFade,
  Parallax,Autoplay,
  Navigation,
  Pagination,
} from "swiper/core";

SwiperCore.use([EffectFade, Parallax,Autoplay, Navigation, Pagination]);

const HeaderMain = () => {
	return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        parallax={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeaderMain;