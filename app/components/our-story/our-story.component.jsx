import React from "react";
import Image from "next/image";
import Story1 from "@/public/images/story-1.svg"
import Story2 from "@/public/images/story-2.svg"
import Story3 from "@/public/images/story-3.svg"
import Story4 from "@/public/images/story-4.svg"
import Story5 from "@/public/story5.svg"
import Story6 from "@/public/story6.svg"

const OurStory = () => {
  return (
    <div className="w-full mt-[75px]">
      <div className="text-center">
        <div className="inline-block px-6 py-2 bg-[#FAFAFA] rounded-full w-[129px] ">
          <h3 className="text-[#8E9BAE] font-medium font-manrope text-[16px]">
            Gallery
          </h3>
        </div>
        <h2 className="text-[40px] leading-[48.64px] font-medium mt-[30px] font-cocon ">
          Our Stories
        </h2>
        <p className="mt-4 text-[#00000099] text-base leading-[32px] px-[86px] mx-auto font-manrope ">
          Our learning programs are designed to nurture creativity, critical
          thinking, and collaboration, helping students to become the
          <br />
          changemakers of tomorrow.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-5 ">
        <div className="space-y-4 ">
          {/* Replace <img> with <Image /> component */}
          <Image
            src={Story1}
            alt="Story 1"
            className="w-full object-cover rounded-lg shadow-md"
          />
          <Image
            src={Story2}
            alt="Story 2"
            className="w-full object-cover rounded-lg shadow-md"
          />
          <Image
            src={Story3}
            alt="Story 3"
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="h-full">
          <Image
            src={Story4}
            alt="Story 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4 h-full overflow-hidden rounded-lg ">
          <Image
            src={Story5}
            alt="Story 5"
            className="w-full  object-cover  rounded-lg shadow-md"
          />
          <Image
            src={Story6}
            alt="Story 6"
            className=" w-full object-cover   rounded-lg shadow-md"
          />
          
        </div>
      </div>
    </div>
  );
};

export default OurStory;
