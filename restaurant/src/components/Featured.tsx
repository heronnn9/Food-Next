import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";
const Featured = () => {
  return (
    <div className=" w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div className="w-screen h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-45 transition-all duration-700 ">
                <Image
                  src={item.img}
                  alt="temp"
                  fill
                  className="object-contain p-4"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl">
                {item.title}
              </h1>
              <p className=" p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
