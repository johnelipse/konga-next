"use client";
import React, { useEffect } from "react";
import {
  IoIosArrowDown,
  IoIosPricetag,
  IoLogoWhatsapp,
  IoMdMenu,
  IoMdPhonePortrait,
} from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbRotate2 } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { HiMiniComputerDesktop} from "react-icons/hi2";
import Slider from "@/components/slider";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-3 font-thin lg:hidden md:block mt-[5.2rem]">
        <button className="flex flex-col items-center text-[13px]">
          <span className="text-[15px]">
            <TbRotate2 />
          </span>
          Browse All
        </button>
        <button className="flex flex-col items-center text-[13px]">
          <span className="text-[15px]">
            <GiClothes />
          </span>
          Fashion
        </button>
        <button className="flex flex-col items-center text-[13px]">
          <span className="text-[15px]">
            <HiMiniComputerDesktop />
          </span>
          Computers
        </button>
        <button className="flex flex-col items-center text-[13px]">
          <span className="text-[15px]">
            <IoMdPhonePortrait />
          </span>
          Phones
        </button>
        <button className="flex flex-col items-center text-[13px]">
          <span className="text-[15px]">
            <IoIosPricetag />
          </span>
          All Deals
        </button>
      </div>
     <div className="mt-[1.5rem] px-5 -z-50"> 
     <div className="flex gap-8 major lg:flex-row flex-col">
        <Slider />
    <div className="w-[33%] lg:w-[33%] md:w-[100%] grid grid-cols-2 gap-5 under ">
    <Link href="/"><Image width={200}  height={197} className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]" src="/hisense.webp" alt="loading" /></Link>  
    <Link href="/"><Image width={200}  height={197} className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]" src="/access new.webp" alt="loading" /></Link>  
    <Link href="/"><Image width={200}  height={197} className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]" src="/bulky.webp" alt="loading" /></Link>  
    <Link href="/"><Image width={200}  height={197} className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]" src="/kongapay-box.jfif" alt="loading" /></Link>  
    </div>
      </div>
      <div className="justify-between mt-[2rem] hidden  lg:flex md:hidden">
  <Link className="border-solid border-2 border-gray-100" href="/"><Image width={200} height={40} className="w-[200px] h-[50px] object-contain" src="/blog.webp" alt="loading" /></Link>
  <Link className="border-solid border-2 border-gray-100" href="/"><Image width={200} height={40} className="w-[200px] h-[50px] object-contain" src="/bills.konga.webp" alt="loading" /></Link>
  <Link className="border-solid border-2 border-gray-100" href="/"><Image width={200} height={40} className="w-[200px] h-[50px] object-contain" src="/store.offline.webp" alt="loading" /></Link>
  <Link className="border-solid border-2 border-gray-100" href="/"><Image width={1200} height={240} className="w-[200px] h-[50px] object-contain" src="/Brand.stores.webp" alt="loading" /></Link>
  <Link className="border-solid border-2 border-gray-100" href="/"><Image width={1200} height={240} className="w-[200px] h-[50px] object-contain" src="/book flights.webp" alt="loading" /></Link>
      </div>
     </div>
    </div>
  );
}
