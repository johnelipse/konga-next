"use client";
import React, { useEffect } from "react";
import {
  IoIosArrowDown,
  IoIosPricetag,
  IoLogoWhatsapp,
  IoMdMenu,
  IoMdPhonePortrait,
} from "react-icons/io";
import "aos/dist/aos.css";
import { TbRotate2 } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import Slider from "@/components/slider";
import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/products";
import { stringify } from "querystring";
import { majorData } from "@/major";
export default function Page() {
  const newMajorData = majorData.slice(0, 10);

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
            <Link href="/">
              <Image
                width={200}
                height={197}
                className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]"
                src="/hisense.webp"
                alt="loading"
              />
            </Link>
            <Link href="/">
              <Image
                width={200}
                height={197}
                className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]"
                src="/access new.webp"
                alt="loading"
              />
            </Link>
            <Link href="/">
              <Image
                width={200}
                height={197}
                className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]"
                src="/bulky.webp"
                alt="loading"
              />
            </Link>
            <Link href="/">
              <Image
                width={200}
                height={197}
                className="rounded-[0.5rem] link w-[100%] lg:w-[100%] md:w-[100%]"
                src="/kongapay-box.jfif"
                alt="loading"
              />
            </Link>
          </div>
        </div>
        <div className="justify-between mt-[2rem] hidden  lg:flex md:hidden">
          <Link className="border-solid border-2 border-gray-100" href="/">
            <Image
              width={200}
              height={40}
              className="w-[200px] h-[50px] object-contain"
              src="/blog.webp"
              alt="loading"
            />
          </Link>
          <Link className="border-solid border-2 border-gray-100" href="/">
            <Image
              width={200}
              height={40}
              className="w-[200px] h-[50px] object-contain"
              src="/bills.konga.webp"
              alt="loading"
            />
          </Link>
          <Link className="border-solid border-2 border-gray-100" href="/">
            <Image
              width={200}
              height={40}
              className="w-[200px] h-[50px] object-contain"
              src="/store.offline.webp"
              alt="loading"
            />
          </Link>
          <Link className="border-solid border-2 border-gray-100" href="/">
            <Image
              width={1200}
              height={240}
              className="w-[200px] h-[50px] object-contain"
              src="/Brand.stores.webp"
              alt="loading"
            />
          </Link>
          <Link className="border-solid border-2 border-gray-100" href="/">
            <Image
              width={1200}
              height={240}
              className="w-[200px] h-[50px] object-contain"
              src="/book flights.webp"
              alt="loading"
            />
          </Link>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="bg-[#94004f] text-white flex items-center gap-8 py-1 px-4 rounded-t-lg">
          <h3 className="text-[2rem]">Today's Deals</h3>
          <Link
            className="border-b-[1px] border-[#94004f]  hover:border-[white] transition-all duration-300 ease-in "
            href="/"
          >
            See All items
          </Link>
        </div>

        <div className="mt-[2rem] grid lg:grid-cols-3 md:overflow-x-auto  gap-4  ">
          {productsData.map((productData, i) => {
            const current = productData.current_price;
            const initial = productData.initial_price;
            const newCurrent = parseInt(current);
            const newInitial = parseInt(initial);
            const discount = newInitial - newCurrent;
            return (
              <Link
                className="flex gap-[1.5rem] bg-white   shadow-sm hover:shadow-lg transition-all duration-500 ease-in px-4 py-4 items-center w-[100%]"
                key={i}
                href={productData.path}
              >
                <div>
                  <img
                    className="w-[4rem] h-auto"
                    src={productData.images[0]}
                    alt="Loading"
                  />
                </div>

                <div>
                  <h3>{productData.title}</h3>
                  <div className="flex gap-4 items-center mt-1 mb-1">
                    <h3 className="text-[1.4rem] font-bold">
                      ₦<span>{productData.current_price}</span>
                    </h3>
                    <h4 className="text-[1rem] decoration-double">
                      ₦<span>{productData.initial_price}</span>
                    </h4>
                    <p className="text-[0.8rem] bg-pink-200 text-pink-600 rounded-full px-1">
                      {productData.discount}
                    </p>
                  </div>
                  <p className="text-green-600 text-[0.9rem]">
                    You saved ₦<span>{discount}</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-8 px-4">
        <h3 className="font-bold text-[22px] border-b-[1px] border-gray-300 pb-[0.5rem] ">
          Sponsored Products
        </h3>

        <div className="mt-[3rem] overflow-x-scroll flex gap-5 flex-shrink-0">
         {
          newMajorData.map((data,i)=>{
            return(
              <Link
              href={data.path} key={i}
              className="flex flex-col flex-shrink-0 gap-[1.5rem] bg-white   shadow-sm hover:shadow-lg transition-all duration-500 ease-in px-4 py-4 items-center w-[15%] mb-5 scrollable"
            >
              <div>
                <img
                  className="image"
                  src={data.image}
                  alt="Loading"
                />
              </div>
              <div>
                <h4 className="mt-1">{data.title}</h4>
                <div className="flex gap-9 items-center mt-3">
                  <p className="font-bold text-[19px]">{data.current}</p>
                  <p className="font-thin text-[13px] line-through">{data?.initial}</p>
                  {/* <p className="text-[0.8rem] bg-pink-200 text-pink-600 rounded-full px-1 py-1">
                   {data?.discount}
                  </p> */}
                </div>
              </div>
            </Link>
            )
          })
         }
        </div>
      </div>
    </div>
  );
}
