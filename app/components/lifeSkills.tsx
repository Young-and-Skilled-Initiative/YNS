"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Sticker from "@/public/logo-sticker-dark.svg";
import Laptop from "@/public/images/laptop-2.png";
import Laptop2 from "@/public/images/laptop.png";

const LifeSkills = () => {
  return (
    <div className="w-full flex gap-24 px-[4em] h-fit py-[100px]">
      <div className="w-full relative ">
        <div className="flex relative">
          <div className="z-4">
            <Image src={Laptop} alt="first laptop image" />
          </div>
          <div className="w-[241px] h-[314px] border border-[#8E9BAE] border-dashed rounded-2xl absolute top-[97px] left-[350px]" />
          <div className="absolute z-5 top-[62px] left-[547px]">
            <Image src={Sticker} alt="Logo-sticker" />
          </div>
        </div>
        <div className="absolute z-20 top-[292px] left-[198px]">
          <Image src={Laptop2} alt="second laptop image" />
        </div>
      </div>
      <div className="flex flex-col gap-[30px] w-[50%]">
        <h1 className="bg-gray-200 text-gray-500 p-[0.5em] text-center w-[8em] rounded-full">
          About Us
        </h1>

        <div className="flex flex-col gap-4">
          <h1 className="text-[40px] font-medium text-black leading-10 font-cocon">
            Life Skills Development
          </h1>
          <p className="text-base leading-8 text-black/60 text-wrap w-[500px]">
            Welcome to Young and Skilled Initiative, where we believe that every
            student has the potential to achieve greatness. Our mission is to
            provide high-quality learning experiences that equip young minds
            with the skills and knowledge they need to thrive in an
            ever-changing world.
          </p>
          <div className="flex items-center">
            <Button size={"lg"} className="rounded-3xl bg-dark-green">
              Explore More About Us
            </Button>
            <Button
              size={"icon"}
              className="rounded-full bg-dark-green ml-[-6px] p-3"
            >
              <img src="/arrow.svg" alt="" className="w-auto h-auto" />
            </Button>
          </div>
          <div className="flex flex-col justify-center gap-2.5 text-black">
            <div className="flex gap-6">
              <div className="flex gap-2.5">
                <div className="border flex justify-center items-center border-gray-300 rounded-full py-2 px-6 text-gray-700 text-lg">
                  . Cyber Security
                </div>
                <div className="border flex justify-center items-center border-gray-300 rounded-full py-2 px-6 text-gray-700 text-lg">
                  ...
                </div>
              </div>
              <div className="border flex justify-center items-center border-gray-300 rounded-full py-2 px-6 text-gray-700 text-lg transform rotate-45">
                . Development
              </div>
            </div>{" "}
            <div className="flex gap-5">
              <div className="border flex justify-center items-center border-gray-300 rounded-full py-2 px-6 text-gray-700 text-lg">
                . AI
              </div>
              <div className="border flex justify-center items-center border-gray-300 rounded-full py-2 px-6 text-gray-700 text-lg">
                . Web3
              </div>
              <div className="border flex justify-center items-center border-gray-300 rounded-full py-2 px-6 text-gray-700 text-lg">
                . Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSkills;
