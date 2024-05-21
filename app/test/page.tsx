"use client";
import { productsData } from "@/products";

import React from "react";

export default function Page() {
  console.log(productsData);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      {productsData.map((prdt, i) => {
        return (
          <div className="w-[200px] lg:bg-[#ed017f] md:bg-green-600 bg-yellow-400 flex h-[100px] rounded-xl gap-3">
            <h2 key={i}>{prdt.title}</h2>
            <p>{prdt.current_price}</p>
           
          </div>
        );
      })}
    </div>
  );
}
