"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import {
  IoIosArrowDown,
  IoIosPricetag,
  IoLogoWhatsapp,
  IoMdMenu,
  IoMdPhonePortrait,
} from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { categoryData } from "@/categories";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdMenu } from "react-icons/md";
import { BsAndroid2, BsShop } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { TbRotate2 } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { HiHome, HiMiniComputerDesktop, HiShoppingCart } from "react-icons/hi2";
import Header from "@/components/header";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTag,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TiVendorApple } from "react-icons/ti";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Footer from "@/components/footer";
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
    </div>
  );
}
