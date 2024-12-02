import React from "react";
import Image from "next/image";
import {
  Star1,
  Star2,
  Star3,
  Group1,
  Group2,
  Group3,
  Sticker1,
  Sticker2,
  Sticker3,
} from "@/public/icons";

const AboutHero = () => {
  return (
    <>
      <div className="font-cocon div flex flex-col gap-10 sm:gap-16 xl:px-9 lg:pb-16">
        <h1 className="text-center text-7xl">Who are <span className="bg-clip-text text-transparent bg-eight-color-block">We?</span>
        </h1>
        <section className="lg:flex lg:flex-row flex-wrap sm:grid grid-cols-2 justify-center space-y-2 relative items-center gap-2 lg:-space-x-1 p-4">
          {/* First Card */}
          <div className="bg-orange-500 relative lg:w-[380px] h-[410px] rounded-xl text-white p-4 pr-4 lg:p-7 flex flex-col gap-14 items-center">
            <div className="flex relative ">
              <h1 className="text-5xl lg:text-[3.25rem] font-medium pr-14 lg:p-0 leading-[64px] text-start">
                We are Young &
                <span className="text-light-green"> inspired.</span>
              </h1>
              <Image
                alt=""
                src={Star1}
                className="absolute left-[180px] -top-2"
              />
            </div>
            <div className=" flex w-full justify-between">
              <Image src={Group1} alt="" className="xl:w-auto lg:w-[140px]" />
              <Image src={Sticker1} alt="" className="xl:w-auto w-[100px]" />
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-green-900 lg:w-[380px] lg:w-[500px] lg:z-10 h-[410px] lg:h-[480px] rounded-xl text-white p-4 lg:p-7 flex flex-col  gap-10 lg:gap-24 items-center">
            <div className="flex relative">
              <h1 className="xl:leading-[73px] pr-14 lg:p-0 xl:pr-14 text-white xl:text-[4rem] text-5xl lg:text-[3.5rem] leading-[4rem] font-medium text-start text-wrap">
                {" "}
                We are Young &{" "}
                <span className="text-light-green"> Loaded.</span>
              </h1>
              <Image
                alt=""
                src={Star2}
                className="absolute -right-2 top-16 lg:top-[160px]"
              />
            </div>
            <div className=" flex w-full justify-between">
              <Image src={Group2} alt="" className="xl:w-auto w-[200px]" />
              <Image src={Sticker2} alt="" className="xl:w-auto w-[120px]" />
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-green-300 lg:w-[380px] h-[410px] rounded-xl text-white p-7 flex flex-col gap-14 items-center">
            <div className="flex relative">
              <h1 className="text-5xl lg:text-[3.25rem] pr-14 lg:p-0 font-medium leading-[64px] text-start">
                We are Young &
                <span className="text-dark-green "> skilled.</span>
              </h1>
              <Image
                alt=""
                src={Star3}
                className="absolute left-[180px] -top-2"
              />
            </div>
            <div className=" flex w-full justify-between ">
              <Image src={Group3} alt="" className="xl:w-auto lg:w-[140px]" />
              <Image src={Sticker3} alt="" className="xl:w-auto lg:w-[100px]" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutHero;
