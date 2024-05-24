import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import "aos/dist/aos.css";
import { MdMenu } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <header className="hidden lg:block md:hidden ">
        <div className="bg-[#f6f6f6] flex items-center gap-12 justify-between py-0 px-[6rem]">
          <Link href="">
            <Image
              width={1400}
              height={247}
              className="w-[100px] h-[55px] object-contain"
              src="/k_travels2.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={352}
              className="w-[100px] h-[45px] object-contain"
              src="/konga_pay.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={247}
              className="w-[100px] h-[45px] object-contain"
              src="/new_konga_drinks.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={247}
              className="w-[100px] h-[55px] object-contain"
              src="/konga_health.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={247}
              className="w-[100px] h-[55px] object-contain"
              src="/k_express2.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={247}
              className="w-[100px] h-[55px] object-contain"
              src="/new_konga_groceries.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={334}
              className="ml-[0.5rem] w-[100px] h-[55px] object-contain"
              src="/kongaTV.png"
              alt=""
            />
          </Link>

          <Link href="">
            <Image
              width={1400}
              height={252}
              className="ml-[0.5rem] w-[100px] h-[55px] object-contain"
              src="/kongaNow.png"
              alt=""
            />
          </Link>
        </div>
        <NavBar/>
      </header>

      <header className="lg:hidden md:block z-50 fixed top-0 w-[100%] bg-white">
        <div className="shadow-[rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;]">
          <div className="flex justify-between items-center px-4 py-3">
            <div className="flex gap-3 items-center">
              <button className="text-[19px]">
                {" "}
                <MdMenu />{" "}
              </button>
              <Link href="/">
                <Image
                  width={327}
                  height={90}
                  className="w-[110px] h-[21px] object-contain"
                  src="/konga-logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex gap-3 items-center">
              <button className="text-[19px]">
                <BsShop />
              </button>
              <button className="text-[21px]">
                <LiaShoppingCartSolid />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] px-4">
            <input
              className="w-[96%] bg-[#e8e8e8] text-[14px] py-2 px-1 rounded-l-[6px] outline-0"
              type="text"
              placeholder="Search for products, brands and categories..."
            />
            <button className="py-[10.1px] px-1 bg-[#e8e8e8] rounded-r-[6px] ">
              <CiSearch />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
