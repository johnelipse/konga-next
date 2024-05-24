"use client";

import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { categoryData } from "@/categories";
import { LuShoppingCart } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

export default function NavBar() {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isFixed && "fixed top-0 inset-x-0 z-50 transition-all ease-in duration-700"}`}>
      <div className="bg-[#ed017f] py-[1rem] px-[1rem] flex justify-between w-[100%]">
        <div className="flex items-center gap-7">
          <Link href="/">
            <Image
              width={327}
              height={90}
              className="w-[100px] h-[25px]"
              src="/logo.png"
              alt="loading"
            />
          </Link>
          <Link
            className="text-white hover:bg-slate-50 transition-all duration-1000 hover:text-[#ed017f] h-[100%] pt-[0.5rem] px-[0.5rem]"
            href="/"
          >
            Store Locator
          </Link>
          <Link
            className="text-white hover:bg-slate-50 transition-all duration-1000 hover:text-[#ed017f] h-[100%] pt-[0.5rem] px-[0.5rem]"
            href="/"
          >
            Sell On Konga
          </Link>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex items-center">
            <input
              className="py-[0.2rem] px-[0.5rem] w-[30rem] outline-0 rounded-l-lg"
              type="text"
              placeholder="Search for products, brands and categories"
            />
            <div className="bg-[#fba100] text-white py-[0.2rem] px-[0.5rem] rounded-r-lg">
              <button>
                <CiSearch />
              </button>
            </div>
          </div>
          <Link className="text-white flex items-center" href="/">
            Help
            <IoIosArrowDown />
          </Link>
          <Link className="text-white" href="/">
            Login/SignUp
          </Link>
        </div>

        <button className="text-white bg-[#33b27b] flex items-center gap-5 py-[0.6rem] px-[1rem] rounded-[0.5rem] hover:bg-[#33b27bee]">
          <h3 className="flex items-center">
            <LuShoppingCart />
            My Cart
          </h3>
          <span className="bg-white text-black px-1 rounded-sm">0</span>
        </button>
      </div>

      <div className="flex justify-between py-0.5 px-3 bg-[#94004f] text-white text-[14px] w-[100%]">
        <Link href="/">
          <h5 className="flex items-center hover:bg-white hover:text-black px-2 transition-all duration-1000">
            All Categories
            <span>
              <IoMdMenu />
            </span>
          </h5>
        </Link>
        {categoryData.map((cart, i) => (
          <Link
            className="hover:bg-white hover:text-black px-2 transition-all duration-1000"
            key={i}
            href="/"
          >
            {cart.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
