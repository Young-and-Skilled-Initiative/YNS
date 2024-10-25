"use client"; // Mark this component as a Client Component

import { useState } from "react";
import Image from "next/image";
import Bento1 from "@/public/bento1.svg";
import Bento2 from "@/public/Bento 2.svg";
import Bento3 from "@/public/Bento 3.svg";
import Bento4 from "@/public/bento4.svg";
import Variant1 from "@/public/variant1.svg";
import Variant2 from "@/public/variant2.svg";
import Variant3 from "@/public/variant3.svg";
import Variant4 from "@/public/variant4.svg";
import Bento1mob 

const Resources = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div>
      <div className="lg:flex-col cursor-pointer hidden  ">
        <div className="flex flex-col gap-[1em] ">
          <h1 className="bg-gray-200 text-gray-500 py-[1em] px-[1.5em]  text-center text-[25px] xl:w-[8em] rounded-full mx-auto mb-4">
            Resources
          </h1>
          <h1 className="font-cocon font-bold xl:text-[40px] text-center xl:w-[25em] mx-auto text-[30px]">
            Unlock your potential and embark on a journey of growth
          </h1>

          <p className="font-manrope  text-gray-500 text-[16px] md:text-[20px] text-center xl:w-[60em] mx-auto ">
            Our learning programs are designed to nurture creativity, critical
            thinking, and collaboration, helping students to become the
            changemakers of tomorrow
          </p>
        </div>

        <div className="lg:px-[2em] lg:py-[4em] xl:flex-col xl:flex  gap-[4em] mt-[2em] px-[3em] ">
          <div className=" flex-col flex xl:flex-row lg:justify-center gap-[4em] ">
            {/* Bento 1 */}
            <div
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
              className="transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              {/* Original Image */}
              <Image
                src={hoveredImage === 1 ? Variant1 : Bento1}
                alt="Bento 1"
                className={`w-full h-auto transition-opacity duration-700 cursor-pointer ${
                  hoveredImage === 1 ? "opacity-100" : "opacity-90"
                }`}
              />
            </div>
            {/* Bento 2 */}
            <div
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
              className="transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <Image
                src={hoveredImage === 2 ? Variant2 : Bento2}
                alt="Bento 2"
                className={`w-full h-auto transition-opacity duration-700 cursor-pointer ${
                  hoveredImage === 2 ? "opacity-100" : "opacity-90"
                }`}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-[4em] mt-[4em] xl:mt-0">
            {/* Bento 3 */}
            <div
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
              className="transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <Image
                src={hoveredImage === 3 ? Variant3 : Bento3}
                alt="Bento 3"
                className={`w-full h-auto transition-opacity duration-700 cursor-pointer ${
                  hoveredImage === 3 ? "opacity-100" : "opacity-90"
                }`}
              />
            </div>
            {/* Bento 4 */}
            <div
              onMouseEnter={() => setHoveredImage(4)}
              onMouseLeave={() => setHoveredImage(null)}
              className="transition-all duration-700 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <Image
                src={hoveredImage === 4 ? Variant4 : Bento4}
                alt="Bento 4"
                className={`w-full h-auto transition-opacity duration-700 cursor-pointer ${
                  hoveredImage === 4 ? "opacity-100" : "opacity-90"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col">


      </div>
    </div>
  );
};

export default Resources;
