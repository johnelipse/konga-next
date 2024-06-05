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
import Card from "@/components/card";
import CardItem from "@/components/card";
import { categoryData } from "@/categories";
import { ChevronRight } from "lucide-react";
export default function Page() {
  const newMajorData = majorData.slice(0, 10);
  const newCategories = categoryData.slice(0, 4);
  const imageCategories = categoryData.slice(8, 26);
  console.log(imageCategories);

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
          <h3 className="lg:text-[2rem] md:text-[19px]">Todays Deals</h3>
          <Link
            className="border-b-[1px] border-[#94004f] lg:text-[18px]  md:text-[15px] hover:border-[white] transition-all duration-300 ease-in"
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
                  <Image
                    className="w-[4rem] h-auto"
                     width={300}
                  height={166}
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
          {newMajorData.map((data, i) => {
            return (
              <Link
                href={data.path}
                key={i}
                className="flex flex-col flex-shrink-0 gap-[1.5rem] bg-white   shadow-sm hover:shadow-lg transition-all duration-500 ease-in px-4 py-4 items-center w-[15%] mb-5 scrollable"
              >
                <div>
                  <Image  className="image"  width={300}
                  height={166}  src={data.image} alt="Loading" />
                </div>
                <div>
                  <h4 className="mt-1">{data.title}</h4>
                  <div className="flex gap-9 items-center mt-3">
                    <p className="font-bold text-[19px]">{data.current}</p>
                    <p className="font-thin text-[13px] line-through">
                      {data?.initial}
                    </p>
                    {/* <p className="text-[0.8rem] bg-pink-200 text-pink-600 rounded-full px-1 py-1">
                   {data?.discount}
                  </p> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-8 px-4">
        <div className="flex gap-7 items-center bg-pink-200 px-4 py-2 rounded-t-[0.7rem]">
          <h3 className="font-bold lg:text-[26px] md:text-[18px]">
            Same Day Delivery
          </h3>
          <Link
            href="/"
            className="text-pink-900 text-[0.9rem] border-b-[1px] border-b-pink-200  hover:border-b-pink-900"
          >
            See all items
          </Link>
        </div>

        <div className="overflow-x-scroll">
          <CardItem />
        </div>
      </div>
      <div className="px-8 py-8 flex gap-8 justify-center items-center">
        {newCategories.map((newCategory:any, i) => {
          return (
            <Link key={i} href={newCategory.path[0]}>
              <div>
                <Image
                  width={300}
                  height={249}
                  className="category"
                  src={newCategory.image}
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="px-8">
        <div className="bg-[#f5a623] px-4 py-1 text-center">
          <h3 className="font-normal text-[22px]">Official Store</h3>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4 mt-8">
          {imageCategories.map((imageCategory:any, i) => {
            return (
              <Link href={imageCategory.path} key={i}>
                <Image
                  className="hover:hoverAction"
                   width={300}
                  height={166}
                  src={imageCategory.image}
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="py-8 px-4">
        <h3 className="font-bold text-[22px] border-b-[1px] border-gray-300 pb-[0.5rem] ">
          Recommended For you
        </h3>

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
                  <Image
                   width={300}
                  height={166}
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
        <Link href="/">
          <Image
            className="rounded-md"
            width={4192}
            height={317}
            src="/special.jpg"
            alt="loading"
          />
        </Link>
        <div className="mt-11">
          <div className="flex items-center  gap-4 flex-shrink-0">
            <Link href="/" className="w-[49%] ">
              {" "}
              <Image
                width={667}
                height={204}
                className="w-[100%]  object-cover rounded-md"
                src="/save.jpg"
                alt="loading"
              />
            </Link>
            <Link href="/" className="w-[49%] rounded-md">
              <Image
                width={667}
                height={204}
                className="w-[100%]  object-cover rounded-md"
                src="/Boozetag.jpg"
                alt="loading"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 flex lg:flex-row md:flex-col flex-col  gap-4 flex-shrink-0">
        <Link className="w-[100%]" href="/">
          <div className="w-[100%]">
            <Image
              width={500}
              height={299}
              src="/furniture.jpg"
              className="w-[100%] rounded-md"
              alt="loading"
            />
          </div>
          <div>
            <h3 className="mt-[1rem] lg:text-[1.2rem] md:text-[0.8rem] text-[0.7rem] font-bold text-slate-500">
              HOME FURNISHINGS
            </h3>
            <p className="mt-[1rem] mb-[1rem] text-slate-500">
              Get upto 70% off
            </p>
            <p className="text-[0.8rem] flex items-center gap-1 text-pink-700">
              SHOP NOW <ChevronRight />
            </p>
          </div>
        </Link>
        <Link className="w-[100%]" href="/">
          <div className="w-[100%]">
            <Image
              width={500}
              height={299}
              src="/fitness.jpg"
              className="w-[100%] rounded-md"
              alt="loading"
            />
          </div>
          <div>
            <h3 className="mt-[1rem] lg:text-[1.2rem] font-bold text-slate-500">
              FITNESS TOOLS & EQUIPMENT
            </h3>
            <p className="mt-[0.5rem] mb-[0.5rem] text-slate-500">
              Get Fitness Equipment At Amazing Discounts!
            </p>
            <p className="text-[0.8rem] flex items-center gap-1 text-pink-700">
              SHOP NOW <ChevronRight />
            </p>
          </div>
        </Link>
        <Link className="w-[100%]" href="/">
          <div className="w-[100%]">
            <Image
              width={500}
              height={299}
              src="/kids.jpg"
              className="w-[100%] rounded-md"
              alt="loading"
            />
          </div>
          <div>
            <h3 className="mt-[1rem] text-[1.2rem] font-bold text-slate-500">
              KIDS WEARS & ACCESSORIES
            </h3>
            <p className="mt-[1rem] mb-[1rem] text-slate-500">
              Get All Kiddies Products At Huge Discounts!
            </p>
            <p className="text-[0.8rem] flex items-center gap-1 text-pink-700">
              SHOP NOW <ChevronRight />
            </p>
          </div>
        </Link>
        <Link className="w-[100%]" href="/">
          <div className="w-[100%]">
            <Image
              width={500}
              height={299}
              src="/tvs.jpg"
              className="w-[100%] rounded-md"
              alt="loading"
            />
          </div>
          <div>
            <h3 className="mt-[1rem] text-[1.2rem] font-bold text-slate-500">
              TOP DEALS ON TELEVISIONS
            </h3>
            <p className="mt-[1rem] mb-[1rem] text-slate-500">
              Get the TV You Want With Bargain Deals!
            </p>
            <p className="text-[0.8rem] flex items-center gap-1 text-pink-700">
              SHOP NOW <ChevronRight />
            </p>
          </div>
        </Link>
      </div>
      <div className="py-8 px-4">
        <h2 className="text-[1.2rem] font-bold text-gray-500 mb-3">
          Konga Online Shopping in Nigeria - Best Shopping Site
        </h2>
        <p className="text-gray-500">
          Konga.com is Nigerias number one online Shopping destination.We pride
          ourselves in having everything you could possibly need for life and
          living at the best prices than anywhere else. Our access to Original
          Equipment Manufacturers and premium sellers gives us a wide range of
          products at very low prices. Some of our popular categories include
          electronics, mobile phones, computers, fashion, beauty products, home
          and kitchen, Building and construction materials and a whole lot more
          from premium brands. Some of our other categories include Food and
          drinks, automotive and industrial, books, musical equipment, babies
          and kids items, sports and fitness, to mention a few. To make your
          shopping experience swift and memorable, there are also added services
          like gift vouchers, consumer promotion activities across different
          categories and bulk purchases with hassle-free delivery. Enjoy free
          shipping rates for certain products and with the bulk purchase option,
          you can enjoy low shipping rates, discounted prices and flexible
          payment. When you shop on our platform, you can pay with your debit
          card or via KongaPay, which is a convenient and secured payment
          solution. Get the best of lifestyle services online. Do not miss out on
          the biggest sales online which takes place on special dates yearly.
        </p>
      </div>
    </div>
  );
}
