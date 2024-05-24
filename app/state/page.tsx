"use client";

import React from "react";

export default function page() {
  const [addNumber, setAddNumber] = React.useState<number>(0);

  function handleIncrement() {
    setAddNumber(addNumber + 1);
  }

  function handleDecrement() {
    setAddNumber(addNumber - 1);
  }

  return (
    <div className="w-full max-w-screen m-auto flex-col flex flex-1 justify-center h-screen items-center">
      <h1 className="text-3xl font-black">Learning State</h1>

      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={handleIncrement}
          className="py-3 px-8 rounded-md bg-amber-500 mt-8"
        >
          Add (+1)
        </button>
        <span className="font-black text-xl">{addNumber}</span>
      </div>
      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={handleDecrement}
          className={`${
            addNumber > 0 && "py-3 px-8 rounded-md bg-green-500 mt-8"
          }`}
        >
          Remove (-1)
        </button>
        <span className="font-black text-xl">{addNumber}</span>
      </div>
    </div>
  );
}
