import React from "react";
import Image from "next/image";
import Story1 from "@/public/images/story-1.svg";
import Story2 from "@/public/images/story-2.svg";
import Story3 from "@/public/images/story-3.svg";
import Story4 from "@/public/images/story-4.svg";
import Story5 from "@/public/story5.svg";
import Story6 from "@/public/story6.svg";

const OurStory = () => {
  return (
    <div className="w-full mt-[75px]">
      <div className="">
        <div className="w-full flex items-start justify-start lg:items-center lg:justify-center">
          <div className="inline-block text-center px-6 py-2 bg-[#FAFAFA] rounded-full w-[129px] ">
            <h3 className="text-[#8E9BAE] font-medium font-manrope text-[16px]">
              Gallery
            </h3>
          </div>
        </div>
        <h2 className=" text-[30px] lg:text-center md::text-[40px] leading-[48.64px] font-medium mt-[30px] font-cocon ">
          Our Stories
        </h2>
        <p className="mt-4 text-[#00000099] text-base leading-[32px] lg:px-[86px] mx-0 text-left lg:text-center md:mx-auto font-manrope ">
          Our learning programs are designed to nurture creativity, critical
          thinking, and collaboration, helping students to become the
          <br className=" hidden lg:block" />
          changemakers of tomorrow.
        </p>
      </div>

      <div className="mt-16 lg:grid lg:grid-cols-3 gap-5 ">
        <div className="lg:space-y-4 flex gap-1 items-center justify-between lg:block ">
          {/* Replace <img> with <Image /> component */}
          <Image
            src={Story1}
            alt="Story 1"
            className=" w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover lg:rounded-lg shadow-lg"
          />
          <Image
            src={Story2}
            alt="Story 2"
            className=" w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover lg:rounded-lg shadow-lg"
          />
          <Image
            src={Story3}
            alt="Story 3"
            className=" w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover lg:rounded-lg shadow-lg"
          />
        </div>

        <div className="h-full mt-[12px] lg:mt-0">
          <Image
            src={Story4}
            alt="Story 4"
            className="w-full h-[149px] md:h-[200px] lg:h-full object-cover lg:rounded-lg shadow-lg"
          />
        </div>
        <div className=" mt-[12px] lg:mt-0 lg:space-y-4 flex gap-1 items-center justify-between lg:block rounded-lg overflow-hidden">
          <Image
            src={Story5}
            alt="Story 5"
            className=" w-[50%] h-[120px] md:h-[200px] lg:h-1/2 lg:w-full object-cover lg:rounded-lg shadow-lg"
          />
          <Image
            src={Story6}
            alt="Story 6"
            className=" w-[50%] h-[120px] md:h-[200px] lg:h-1/2 lg:w-full object-cover lg:rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;