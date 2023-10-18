import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FilmsSwiper.css";

// import required modules
import { Scrollbar } from "swiper/modules";
import { useFilmsData } from "../../api/tmdbAPI";
import SwiperFilmDetail from "./SwiperFilmDetail/SwiperFilmDetail";

export default function FilmsSwiper() {
  const { filmsData } = useFilmsData(1, "trending");
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        style={{ height: "700px", marginTop: "60px" }}
      >
        {filmsData.map((film) => (
          <SwiperSlide key={film.id}>
            {/* <img
              src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
              alt={film.original_title}
            /> */}
            <SwiperFilmDetail filmID={film.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
