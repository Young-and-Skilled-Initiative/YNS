"use client";
import img1 from "@/public/images/about-us-img1.png";
import { AboutBg } from "@/public/images";
import img2 from "@/public/images/about-us-img2.png";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import badge from "@/public/Logosticker.svg";
const AboutUs = () => {
  return (
    <>
      <div className="w-full flex sm:flex-row flex-col-reverse sm:items-start sm:text-start text-center justify-center items-center relative gap-16 sm:gap-24 lg:gap-[142px] px-[1em] xl:px-24 my-14 sm:mb-[134px]">
        <div className="block sm:hidden text-xs text-ash -mt-24">
          <ul className="w-full mt-[15px] flex items-center justify-start gap-[10px] ">
            <div className="bg-white w-[120px] text-nowrap h-[32.97px] rounded-[44.98px] flex items-center justify-center border border-ash py-[15.5px] px-[32px] ">
              <li className=" font-medium list-disc ">Cyber Security</li>
            </div>
            <div className=" bg-white w-[44px] h-[37px] rounded-full flex items-center justify-center border border-ash text-ash ">
              <div className=" rounded-full w-[5px] h-[5px] bg-ash" />
              <div className=" rounded-full w-[5px] h-[5px] bg-ash" />
              <div className=" rounded-full w-[5px] h-[5px] bg-ash" />
            </div>
            <div className="bg-white h-[32.97px] w-[120px] rounded-[44.98px] flex items-center justify-center border border-ash py-[15.5px] px-[2px] rotate-[43.52deg] relative -left-[8px] ">
              <li className=" font-medium  list-disc ">Development</li>
            </div>
          </ul>

          <ul className="w-full mt-[10px] flex items-center justify-start sm:gap-5 gap-3  font-medium">
            <div className="bg-white h-[35px] w-14 rounded-[44.98px] flex items-center justify-center border border-ash py-[15.5px] px-[23px] ">
              <li className="list-disc ">AI</li>
            </div>
            <div className="bg-white h-[35px] w-[78px] rounded-[44.98px] flex items-center justify-center border border-ash py-[15.5px] px-[23px] ">
              <li className=" list-disc ">Web3</li>
            </div>
            <div className="bg-white h-[35px] w-[82px] rounded-[44.98px] flex items-center justify-center border border-ash py-[15.5px] px-[23px] ">
              <li className=" list-disc ">Design</li>
            </div>
          </ul>
        </div>
        <div className="w-1/2 relative  ">
          <Image
            src={badge}
            className="lg:w-[90px] lg:h-[90px] w-16 h-16 z-10 absolute object-contain -right-20 sm:-right-20 lg:-right-28 xl:-right-[72px] top-4 sm:top-8 "
            alt=""
          />
          <div className="w-[200px] h-[160px] sm:w-[240px]  sm:h-[180px] lg:w-[301px] lg:h-[314px] rounded-[14.94px] border border-dotted border-ash absolute top-10 sm:top-[75px] left-2 sm:left-20 lg:left-[160px] xl:left-[302px] " />
          <div className=" md:ml-[4em] xl:ml-[6em] flex w-full">
            <div className="sm:z-20">
              <Image
                src={AboutBg}
                className="w- relative right-16 sm:w-[243px] h-[200px] lg:w-[380px] lg:h-[260px] object-contain "
                alt=""
              />
            </div>
          </div>

          {/* Lady Image (moved up with negative margin) */}
          <div className="flex  items-end -mt-[1em] sm:-mt-[3em] md:ml-[em]  lg:ml-[8em]  relative ">
            <div className="flex flex-col z-30  lg:mb-7 ">
              <Image
                src={img2}
                className="w-[280px] sm:w-[223px] sm:h-[200px] lg:w-[343px] h-[180px] lg:h-[228px] md:h-[232px] object-contain -top-20 sm:-top-6 lg:top-0 left-2 sm:left-14 lg:left-4 xl:left-[73px]  relative"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 w-full">
          <div className="w-[138px] mx-auto  h-[38px] bg-[#FAFAFA] rounded-[30px] flex items-center justify-center">
            <p className="text-base text-center text-ash font-[medium]  sm:text-start">
              About Us
            </p>
          </div>

          <h3 className=" text-[40px]  font-medium leading-[48.64px] font-cocon mt-[30px] mb-[15px] ">
            Life Skills Development
          </h3>

          <p className="text-base font-400 leading-8 text-black/60 font-manrope tracking-wide lg:pr-[2.5em]">
            Welcome to Young and Skilled Initiative, where we believe that every
            student has the potential to achieve greatness. Our mission is to
            provide high-quality learning experiences that equip young minds
            with the skills and knowledge they need to thrive in an
            ever-changing world.
          </p>

          <div className="w-full mt-[15px] flex items-center justify-center sm:justify-start ">
            <button className="bg-[#114F3C] sm:h-[62.97px] rounded-[44.98px] flex items-center justify-center text-sm sm:text-[17.19px] text-white py-[18.49px] px-8 sm:px-[40px] ">
              Explore More About Us
            </button>
            <div className=" bg-[#114F3C] w-[60px] h-14 sm:h-[60px] rounded-full flex items-center justify-center">
              <ArrowUpRight size={33.17} color={"#FFFF"} />
            </div>
          </div>

          <div className="mt-[65.03px] hidden sm:block text-sm lg:text-base text-ash">
            <ul className="w-full mt-[15px] flex items-center justify-start gap-[10px] ">
              <div className="bg-white w-[181px] h-12 lg:h-[62.97px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-[23px] ">
                <li className=" font-medium list-disc ">Cyber Security</li>
              </div>
              <div className=" bg-white w-[64px] h-12 lg:h-[50px] rounded-full flex items-center justify-center border border-ash text-ash ">
                <div className=" rounded-full w-[5px] h-[5px] bg-ash" />
                <div className=" rounded-full w-[5px] h-[5px] bg-ash" />
                <div className=" rounded-full w-[5px] h-[5px] bg-ash" />
              </div>
              <div className="bg-white h-12 lg:h-[62.97px] w-[173px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-[23px] rotate-[43.52deg] relative top-2 lg:left-[14px] ">
                <li className=" font-medium  list-disc ">Development</li>
              </div>
            </ul>

            <ul className="w-full mt-[10px] flex items-center justify-start gap-[19px] ">
              <div className="bg-white h-[50px] w-[70px] lg:w-[85px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-[23px] ">
                <li className=" font-medium list-disc ">AI</li>
              </div>
              <div className="bg-white h-[50px] w-[90px] lg:w-[116px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-[23px] ">
                <li className=" font-medium  list-disc ">Web3</li>
              </div>
              <div className="bg-white h-[50px] w-[90px] lg:w-[123px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-[23px] ">
                <li className=" font-medium  list-disc ">Design</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
// git config pull rebase --false
