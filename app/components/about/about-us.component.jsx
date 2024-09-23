"use client";
import img1 from "@/public/images/about-us-img1.png";
import img2 from "@/public/images/about-us-img2.png";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import badge from "@/public/Logosticker.svg";
const AboutUs = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between relative gap-[142px]  mb-[134px]">
        <div className="w-1/2 relative  ">
          <Image src={badge} className=" z-10 absolute object-contain -right-[50px] top-8 " />
          <div className=" w-[241px] h-[314px] rounded-[14.94px] border border-dotted border-[#8E9BAE] absolute  top-[75px] left-[352px] " />
          <div className=" ml-[2em] flex">
            <div className="z-20">
              <Image
                src={img1}
                className=" w-[360px] h-[300px] object-contain "
              />
            </div>
          </div>

          {/* Lady Image (moved up with negative margin) */}
          <div className="flex  items-end -mt-[3em] ml-[8em] relative ">
            <div className="flex flex-col z-30  mb-7 ">
              <Image
                src={img2}
                className="w-[343px] h-[242px] object-contain  left-[73px]  relative"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-[138px] h-[38px] bg-[#FAFAFA]  rounded-[30px] flex items-center justify-center">
            <p className="text-[16px] text-[#8E9BAE] font-[medium]">About Us</p>
          </div>

          <h3 className=" text-[40px]  font-medium leading-[48.64px] font-cocon mt-[30px] mb-[15px] ">
            Life Skills Development
          </h3>

          <p className=" text-[16px] font-400 leading-[32px] font-manrope ">
            Welcome to Young and Skilled Initiative, where we believe that every
            student has the potential to achieve greatness. Our mission is to
            provide high-quality learning experiences that equip young minds
            with the skills and knowledge they need to thrive in an
            ever-changing world.
          </p>

          <div className="w-full mt-[15px] flex items-center justify-start ">
            <button className="bg-[#114F3C] h-[62.97px] rounded-[44.98px] flex items-center justify-center text-[17.19px] text-white py-[18.49px] px-[40px] ">
              Explore More About Us
            </button>
            <div className=" bg-[#114F3C] w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <ArrowUpRight size={33.17} color={"#FFFF"} />
            </div>
          </div>

          <div className="mt-[65.03px]">
            <ul className="w-full mt-[15px] flex items-center justify-start gap-[10px] ">
              <div className="bg-white w-[181px] h-[62.97px] rounded-[44.98px] flex items-center justify-center border border-[#8E9BAE] text-[17.19px] text-[#8E9BAE] py-[15.5px] px-[23px] ">
                <li className="text-[16px] font-medium list-disc ">
                  Cyber Security
                </li>
              </div>
              <div className=" bg-white w-[64px] h-[50px] rounded-full flex items-center justify-center border border-[#8E9BAE] text-[#8E9BAE] ">
                <div className=" rounded-full w-[5px] h-[5px] bg-[#8E9BAE]" />
                <div className=" rounded-full w-[5px] h-[5px] bg-[#8E9BAE]" />
                <div className=" rounded-full w-[5px] h-[5px] bg-[#8E9BAE]" />
              </div>
              <div className="bg-white h-[62.97px] w-[173px] rounded-[44.98px] flex items-center justify-center border border-[#8E9BAE] text-[17.19px] text-[#8E9BAE] py-[15.5px] px-[23px] rotate-[43.52deg] relative left-[14px] ">
                <li className="text-[16px] font-medium  list-disc ">
                  Development
                </li>
              </div>
            </ul>

            <ul className="w-full mt-[10px] flex items-center justify-start gap-[19px] ">
              <div className="bg-white h-[50px] w-[85px] rounded-[44.98px] flex items-center justify-center border border-[#8E9BAE] text-[17.19px] text-[#8E9BAE] py-[15.5px] px-[23px] ">
                <li className="text-[16px] font-medium list-disc ">AI</li>
              </div>
              <div className="bg-white h-[50px] w-[116px] rounded-[44.98px] flex items-center justify-center border border-[#8E9BAE] text-[17.19px] text-[#8E9BAE] py-[15.5px] px-[23px] ">
                <li className="text-[16px] font-medium  list-disc ">Web3</li>
              </div>
              <div className="bg-white h-[50px] w-[123px] rounded-[44.98px] flex items-center justify-center border border-[#8E9BAE] text-[17.19px] text-[#8E9BAE] py-[15.5px] px-[23px] ">
                <li className="text-[16px] font-medium  list-disc ">Design</li>
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
