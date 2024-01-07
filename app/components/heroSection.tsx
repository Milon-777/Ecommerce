"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../page.css";

import Image from "next/image";

export default function HeroSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<button class="' + className + '">' + "</button>";
    },
  };

  return (
    <Container>
      <Box>
        <Swiper
          pagination={pagination}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <Image src="/vercel.svg" alt="SVG" width="700" height="300" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/vercel.svg" alt="SVG" width="700" height="300" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/vercel.svg" alt="SVG" width="700" height="300" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
}
