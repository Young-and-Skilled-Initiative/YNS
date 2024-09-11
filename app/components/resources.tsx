"use client"; // Mark this component as a Client Component

import { useState } from "react";
import Image from "next/image";
import Bento1 from "@/public/Bento 1.svg";
import Bento2 from "@/public/Bento 2.svg";
import Bento3 from "@/public/Bento 3.svg";
import Bento4 from "@/public/Bento 4.svg";
import Variant1 from "@/public/variant1.svg";
import Variant2 from "@/public/variant2.svg";
import Variant3 from "@/public/variant3.svg";
import Variant4 from "@/public/variant4.svg";

const Resources = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
        <h1 className="bg-gray-200 text-gray-500 p-[0.5em] text-center w-[8em] rounded-full mx-auto mb-4">Resources</h1>
      <h1 className="font-cocon font-bold text-[40px] text-center">
        Unlock your potential and embark on a journey of{" "}
      </h1>
      <h1 className="font-cocon font-bold text-[40px] text-center mb-[1em]">growth</h1>
      <p className="font-manrope  text-gray-500 text-[16px] text-center ">
        Our learning programs are designed to nurture creativity, critical
        thinking, and collaboration, helping students to become the{" "}
      </p>
      <p className="font-manrope text-gray-500 text-[16px] text-center">changemakers of tomorrow.</p>
      <div className="px-[2em] py-[4em] flex flex-col gap-[4em]">
        <div className="flex gap-[4em]">
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
        <div className="flex gap-[4em]">
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
  );
};

export default Resources;
