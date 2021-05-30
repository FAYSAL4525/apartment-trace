import React, { useState } from 'react';
import './Header.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import apartmentImg1 from "../../assets/images/apartment-1.png";
import apartmentImg2 from "../../assets/images/apartment-2.png";
import apartmentImg3 from "../../assets/images/apartment-3.png";
import apartmentImg4 from "../../assets/images/apartment-4.png";
import apartmentImg5 from "../../assets/images/apartment-5.png";
import apartmentImg6 from "../../assets/images/apartment-6.png";
import apartmentImg7 from "../../assets/images/apartment-7.png";
import apartmentImg8 from "../../assets/images/apartment-8.png";
import apartmentImg9 from "../../assets/images/apartment-9.png";

import SwiperCore, {
  EffectFade,
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/core";

SwiperCore.use([
  EffectFade,
  Parallax,
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
]);

const HeaderMain = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#010101",
          "--swiper-pagination-color": "#010101",
        }}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // navigation={true}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg1})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg2})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg3})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg4})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg5})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg6})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg7})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg8})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${apartmentImg9})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        // watchSlidesVisibility={true}
        watchSlidesProgress={true}
        navigation={true}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#21ceed",
          "--swiper-pagination-color": "#21ceed",
        }}
      >
        <SwiperSlide>
          <img alt="" src={apartmentImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" ssrc={apartmentImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg8} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={apartmentImg9} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeaderMain;