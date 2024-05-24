import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {
  return (
  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Link href="/"><Image width={5057} height={2083} src="/slider-1.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={8192} height={3264} src="/slider-2.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={5229} height={2083} src="/slider-3.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={5090} height={2083} src="/slider-4.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={5229} height={2083} src="/slider-5.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={5142} height={2083} src="/slider-6.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={5229} height={2083} src="/slider-7.webp" alt="loading" /></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/"><Image width={1400} height={559} src="/slider-8.jfif" alt="loading" /></Link>
        </SwiperSlide>
      </Swiper>
    
  );
}
