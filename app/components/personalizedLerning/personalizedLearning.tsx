import Image from "next/image";
import React from "react";
import Star from "@/public/cstar.svg";
import Star2 from "@/public/stargreen.svg";
import Man from "@/public/man.gif";
import Logo from "@/public/orangelogo.svg";

const PersonalizedLearning = () => {
  return (
    <div className="bg-black mb-[9em]  ">
      <div className="flex flex-col lg:flex-row justify-between lg:px-[5em] items-center w-full lg:p-10 px-4">
        {/* First Text Section */}
        <div className=" lg:flex-col font-cocon text-white lg:w-[30%] mb-3 mt-[1em] hidden lg:block ">
          <h1 className="font-[500] lg:text-[40px] text-[30px]">
            Personalized
          </h1>
          <h1 className="text-[#FFFFFF80] font-[500] lg:text-[40px] text-[30px]">
            Learning
          </h1>
        </div>
        <div className="mt-[1em] lg:hidden">
          <h1 className="text-white font-cocon text-[30px] ">
            Personalized Learning
          </h1>
        </div>

        {/* Image Section */}
        <Image
          src={Star}
          alt="star"
          className="w-20 h-20 object-contain hidden lg:block "
        />

        {/* Paragraph Section */}
        <div className="lg:w-[30%] text-center mb-6">
          <p className="text-[#D2D2D2] font-[400] text-[16px] font-manrope ">
            Our programs are tailored to meet the unique needs and interests of
            each student, ensuring a personalized and impactful learning
            experience.
          </p>
        </div>
        <div className="flex  items-left lg:hidden">
          <Image src={Star} alt="" />
          <div></div>
        </div>
      </div>
      <div className="flex lg:pl-[5em] px-[2em]  lg:px-0">
        <div>
          <Image
            src={Star2}
            alt=""
            className="mt-[15em] absolute left-0 hidden lg:block"
          />
        </div>
        <div className="mx-auto">
          <Image
            src={Man}
            alt=""
            className="rounded-2xl lg:-mb-[7em] -mb-[4em]"
            unoptimized
          />
        </div>
        <div>
          <Image
            src={Logo}
            alt=""
            className="-mt-[3em] -ml-[2em] hidden lg:block "
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PersonalizedLearning;
