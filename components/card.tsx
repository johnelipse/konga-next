import Image from "next/image";
import Link from "next/link";
import React from "react";
import { majorData } from "@/major";

export default function CardItem() {
  const newData=majorData.slice(10,19)

  
let enteredData=[
{
  image:"",
  title: "",
  current: "",
  initial: "",
  discount: "",
  path: "/"
}
]
enteredData=newData
  return (
    <div className="mt-[1rem]  flex gap-5 flex-shrink-0">
    {
      enteredData.map((entered,i)=>{
        return(
          <Link
          href={entered.path}
          key={i}
          className="flex flex-col flex-shrink-0 gap-[1.5rem] lg:bg-white sm:bg-red-500   shadow-sm hover:shadow-lg transition-all duration-500 ease-in px-5 py-5 items-center w-[15%] mb-5 scrollableTwo p"
        >
          <div>
            <Image
              width={300}
              height={300}
              src={entered.image}
              alt="product image"
              className="image"
            />
          </div>
          <div>
            <h3 className="mt-1">{entered.title}</h3>
            <div className="flex gap-4 items-center mt-3">
              <p className="font-bold text-[19px]">{entered.current}</p>
              <p className="font-thin text-[13px] line-through">{entered.initial}</p>
              <p className="text-[0.8rem] bg-pink-200 text-pink-600 rounded-full px-1 py-1">
                {entered?.discount}
              </p>
            </div>
          </div>
        </Link>
        )
      })
    }
    </div>
  );
}
