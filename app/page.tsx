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
export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
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
      <section>
        <footer className="mt-[3rem] hidden lg:block md:hidden">
          {/* contacts */}
          <div className="bg-[#393939ff] text-white flex justify-between px-4 py-3 items-center">
            <div className="flex items-center gap-3">
              {/* image */}
              <div>
                <MdEmail />
              </div>
              {/* data */}
              <div>
                <h3>EMAIL SUPPORT</h3>
                <Link href="/">help@konga.com</Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* image */}
              <div>
                <FaPhone />
              </div>
              {/* data */}
              <div>
                <h3>PHONE SUPPORT</h3>
                <Link href="/">0708 063 5700, 0201 888 343</Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* image */}
              <div>
                <IoLogoWhatsapp />
              </div>
              {/* data */}
              <div>
                <h3>WHATSAPP</h3>
                <Link href="/">0907 0038 400, 0809 460 5555</Link>
              </div>
            </div>

            <div>
              {/* data */}
              <div>
                <h3>GET LATEST DEALS</h3>
                <p>Our best promotions sent to your inbox.</p>
              </div>
            </div>

            <div>
              <input
                className="py-2.5 px-4 outline-0 text-black rounded-l-[8px]"
                type="email"
                placeholder="Email Address"
              />
              <button className="bg-[#ff0076ff] py-2.5 px-4 rounded-r-[8px]">
                Subscribe
              </button>
            </div>
          </div>
          {/* detailed */}
          <div className="bg-[#1f1f1fff] text-gray-400 flex justify-between py-7 px-5">
            {/* about  */}
            <div className="flex flex-col gap-1">
              <h3 className="mb-[0.5rem] hover:text-white">About Konga</h3>
              <Link className="hover:text-white" href="/">
                Contact Us
              </Link>
              <Link className="hover:text-white" href="/">
                About Us
              </Link>
              <Link className="hover:text-white" href="/">
                Careers
              </Link>
              <Link className="hover:text-white" href="/">
                Our Blogs
              </Link>
              <Link className="hover:text-white" href="/">
                Forum
              </Link>
              <Link className="hover:text-white" href="/">
                Terms & Conditions
              </Link>
            </div>
            {/* pay */}
            <div className="flex flex-col gap-1">
              <h3 className="mb-[0.5rem] hover:text-white">PAYEMENT</h3>
              <Link className="hover:text-white" href="/">
                Kongapay
              </Link>
              <Link className="hover:text-white" href="/">
                Wallet
              </Link>
              <Link className="hover:text-white" href="/">
                Verve
              </Link>
              <Link className="hover:text-white" href="/">
                Mastercard
              </Link>
              <Link className="hover:text-white" href="/">
                Visa
              </Link>
            </div>
            {/* buy */}
            <div className="flex flex-col gap-1">
              <h3 className="mb-[0.5rem] hover:text-white">BUYING ON KONGA</h3>
              <Link className="hover:text-white" href="/">
                Buyer Safety Centre
              </Link>
              <Link className="hover:text-white" href="/">
                FAQs
              </Link>
              <Link className="hover:text-white" href="/">
                Delivery
              </Link>
              <Link className="hover:text-white" href="/">
                Konga Return Policy
              </Link>
              <Link className="hover:text-white" href="/">
                Digital Services
              </Link>
              <Link className="hover:text-white" href="/">
                Bulk Purchase
              </Link>
            </div>
            {/* more */}
            <div className="flex flex-col gap-1">
              <h3 className="mb-[0.5rem] hover:text-white">MORE INFO</h3>
              <Link className="hover:text-white" href="/">
                Site Map
              </Link>
              <Link className="hover:text-white" href="/">
                Track My Order
              </Link>
              <Link className="hover:text-white" href="/">
                Privacy Policy
              </Link>
              <Link className="hover:text-white" href="/">
                Authantic Items Policy
              </Link>
            </div>
            {/* make */}
            <div className="flex flex-col gap-1">
              <h3 className="mb-[0.5rem] hover:text-white">
                MAKE MONEY ON KONGA
              </h3>
              <Link className="hover:text-white" href="/">
                Become A konga Affilliate
              </Link>
            </div>
            {/* icons */}
            <div>
              <div className="flex gap-4">
                <Link
                  className="flex gap-2 items-center bg-black px-4 py-1 rounded-[0.5rem]"
                  href="https://itunes.apple.com/us/app/konga/id880918394?ls=1&mt=8"
                >
                  <span>
                    <TiVendorApple size={30} />
                  </span>
                  <div>
                    <p className="text-[14px]">Download on</p>
                    <h3 className="text-[16px]">App Store</h3>
                  </div>
                </Link>
                <Link
                  className="flex gap-2 items-center bg-black px-4 py-1 rounded-[0.5rem]"
                  href="https://play.google.com/store/apps/details?id=com.konga.androida"
                >
                  <span>
                    <BsAndroid2 size={30} />
                  </span>
                  <div>
                    <p className="text-[14px]">Download on</p>
                    <h3 className="text-[16px]">Google Play</h3>
                  </div>
                </Link>
              </div>
              <div>
                <h3 className="mb-[1.3rem] mt-[1.3rem]">CONNECT WITH US</h3>
                <div className="flex gap-2">
                  <Link className="bg-[#333333] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white hover:text-blue-500" href="https://www.facebook.com/ShopKonga">
                     <FaFacebookF />
                  </Link>
                  <Link className="bg-[#333333] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white hover:text-blue-500" href="https://twitter.com/@shopkonga">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#333333] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white hover:text-red-500" href="https://www.instagram.com/shopkonga">
                    <FaInstagram />
                  </Link>
                  <Link className="bg-[#333333] text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white hover:text-red-600" href="https://www.youtube.com/shopkonga">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        {/* copy right */}
     <div className="bg-[#1f1f1fff] flex justify-between items-center py-7 px-5">
      <div className="h-3 bg-white"></div>
         <p className="text-white text-[0.8rem]">Copyright © 2024 Konga.com. All rights reserved</p>
         <div className="h-3 bg-white"></div>
     </div>
        </footer>
        {/* small screen */}
        <footer className="lg:hidden md:block flex justify-between w-[100%] px-4 py-5 fixed bottom-0">
         <button className="flex flex-col items-center">
          <HiHome size={19} />
          <p>Home</p>
         </button>
         <button className="flex flex-col items-center">
          <FaTag />
          <p>Deals</p>
         </button>
         <button className="flex flex-col items-center">
          <HiShoppingCart size={19} />
          <p>Cart</p>
         </button>
         <button className="flex flex-col items-center">
          <HiOutlineMenuAlt3 size={19} />
          <p>More</p>
         </button>
        </footer>
      </section>
    </div>
  );
}
