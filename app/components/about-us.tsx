"use client";
import { AboutBg } from "@/public/images";
import img2 from "@/public/images/about-us-img2.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import badge from "@/public/Logosticker.svg";
import Link from "next/link";
import Section from "@/components/layout/Section";

const AboutUs = () => {
  return (
    <>
      <Section id="about-us" className=" flex sm:flex-row flex-col-reverse sm:items-start sm:text-start text-center justify-center items-center relative gap-20 sm:gap-24 lg:gap-36 h-full">
        <div className="block sm:hidden text-xs text-ash mt-10">
          <ul className="w-full mt-4 flex items-center justify-start gap-2.5 ">
            <div className="bg-white w-28 text-nowrap h-8 rounded-[44.98px] flex items-center justify-center border border-ash py-4 px-8 ">
              <li className=" font-medium list-disc ">Cyber Security</li>
            </div>
            <div className=" bg-white w-[44px] h-[37px] rounded-full flex items-center justify-center border border-ash text-ash ">
              <div className=" rounded-full w-1 h-1 bg-ash" />
              <div className=" rounded-full w-1 h-1 bg-ash" />
              <div className=" rounded-full w-1 h-1 bg-ash" />
            </div>
            <div className="bg-white h-8 w-28 rounded-[44.98px] flex items-center justify-center border border-ash py-4 px-0.5 rotate-[43.52deg] relative -left-2 ">
              <li className=" font-medium  list-disc ">Development</li>
            </div>
          </ul>

          <ul className="w-full mt-2.5 flex items-center justify-start sm:gap-5 gap-3  font-medium">
            <div className="bg-white h-9 w-14 rounded-[44.98px] flex items-center justify-center border border-ash py-4 px-6 ">
              <li className="list-disc ">AI</li>
            </div>
            <div className="bg-white h-9 w-20 rounded-[44.98px] flex items-center justify-center border border-ash py-4 px-6 ">
              <li className=" list-disc ">Web3</li>
            </div>
            <div className="bg-white h-9 w-[82px] rounded-[44.98px] flex items-center justify-center border border-ash py-4 px-6 ">
              <li className=" list-disc ">Design</li>
            </div>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-full h-full relative  -top-10 sm:-top-0 flex">
          <div className=" sm:z-20 w-full">
            <Image
              src={AboutBg}
              className="h-40 w-52 sm:h-52 sm:w-60 lg:w-auto lg:h-auto left-4 md:left-9 lg:left-0 relative z-30 right-1 xl:w-auto xl:h-auto object-contain "
              alt=""
            />
          </div>

          <div className="">
            {/* <Image
              src={stickBadge}
              className="lg:w-auto lg:h-auto h-40 w-56 sm:h-52 sm:w-60 md:w-96 z-4 absolute right-8 sm:-right-24 xl:-right-6 top-10 object-contain "
              alt="Sticker"
            /> */}

            <Image
              src={badge}
              className="lg:w-auto lg:h-auto w-16 h-16 z-40 absolute right-14 sm:-right-14 lg:-right-32 xl:-right-14 object-contain "
              alt="Sticker"
            />
          </div>
          <div className="absolute -bottom-28 right-14 sm:-right-12 xl:right-1 z-50">
            <Image
              src={img2}
              className="h-40 w-52 sm:h-52 sm:w-60 lg:w-auto lg:hauto object-contain"
              alt=""
            />
          </div>
        </div>

        <div className=" sm:w-1/2 lg:w-full">
          <div className="w-[138px] mx-auto  h-9 bg-[#FAFAFA] rounded-[30px] flex items-center justify-center">
            <p className="text-base text-center text-ash font-[medium]  sm:text-start">
              About Us
            </p>
          </div>

          <h3 className="text-4xl sm:text-[40px] text-center w-full font-medium sm:leading-[48.64px] font-cocon mt-7 mb-4 ">
            Life Skills Development
          </h3>

          <p className="text-base w-full font-400 leading-8 text-black/60 font-manrope tracking-wide lg:pr-10 xl:p-0">
            Welcome to Young and Skilled Initiative, where we believe that every
            student has the potential to achieve greatness. Our mission is to
            provide high-quality learning experiences that equip young minds
            with the skills and knowledge they need to thrive in an
            ever-changing world.
          </p>

          <div className="w-full mt-4 flex items-center justify-center sm:justify-start ">
            <Link href="/aboutus">
              <button className="bg-[#114F3C] sm:h-16 rounded-[44.98px] flex items-center justify-center text-sm sm:text-lg text-white py-5 px-8 sm:px-10 ">
                Explore More About Us
              </button>
            </Link>

            <div className=" bg-[#114F3C] w-14 h-14 sm:h-14 rounded-full flex items-center justify-center">
              <ArrowUpRight size={33.17} color={"#FFFF"} />
            </div>
          </div>

          <div className="mt-16 hidden sm:block text-sm lg:text-base text-ash">
            <ul className="w-full mt-4 flex items-center justify-start gap-2.5 ">
              <div className="bg-white w-[181px] h-12 lg:h-16 rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-6 ">
                <li className=" font-medium list-disc ">Cyber Security</li>
              </div>
              <div className=" bg-white w-[64px] h-12 lg:h-[50px] rounded-full flex items-center justify-center border border-ash text-ash ">
                <div className=" rounded-full w-1 h-1 bg-ash" />
                <div className=" rounded-full w-1 h-1 bg-ash" />
                <div className=" rounded-full w-1 h-1 bg-ash" />
              </div>
              <div className="bg-white h-12 lg:h-16 w-[173px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-6 rotate-[43.52deg] relative top-2 lg:left-3.5 ">
                <li className=" font-medium  list-disc ">Development</li>
              </div>
            </ul>

            <ul className="w-full mt-2.5 flex items-center justify-start gap-[19px] ">
              <div className="bg-white h-12 w-[70px] lg:w-[85px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-6 ">
                <li className=" font-medium list-disc ">AI</li>
              </div>
              <div className="bg-white h-12 w-[90px] lg:w-[116px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-6 ">
                <li className=" font-medium  list-disc ">Web3</li>
              </div>
              <div className="bg-white h-12 w-[90px] lg:w-[123px] rounded-[44.98px] flex items-center justify-center border border-ash  py-4 px-6 ">
                <li className=" font-medium  list-disc ">Design</li>
              </div>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutUs;
// git config pull rebase --false
