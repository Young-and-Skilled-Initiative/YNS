"use client";
import Lady from "@/public/lady.svg";
import Image from "next/image";
import Man from "@/public/man.svg";

const Network = () => {
  return (
    <div className="flex justify-between w-[100vw] px-[21px] md:px-[5em]  pt-[4em] pb-[2em] gap-[3em] items-center bg-gray-100  flex-col  md:flex-row ">
      {/* Left Side (Text and Button) */}
      <div className="flex flex-col gap-[2em] md:pl-[2em] w-full md:w-[50%]  ">
        <h1 className="font-cocon font-bold text-[30px] lg:text-[50px] w-[12em] leading-[48.64px]">
          Go for Community and Networking
        </h1>
        <p className="font-manrope font-normal text-balance text-[16px] w-[28em] text-[#00000099]">
          Join a vibrant community of like-minded students and gain access to
          valuable networking opportunities.
        </p>
        <button className="bg-[#114F3C] text-white w-[12em] p-5 rounded-full font-manrope font-normal text-[16px]">
          Network Now
        </button>
      </div>

      {/* Right Side (Images) */}
      <div className="w-full md:w-[50%] mt-[40px] md:mt-0 flex flex-col relative">
        {/* Male Image */}
        <div className="w-[330px] lg:w-[450px] h-[260px] lg:h-[341px] rounded-[14.94px] border border-dotted border-[#8E9BAE] absolute  md:top-[50px] lg:top-[75px] left-[60px] hidden md:block " />
        <div className=" md:ml-[2em] flex">
          <div className="z-30">
            <Image
              src={Lady}
              alt="Man image"
              className="w-[220px] h-[186px] md:w-[initial] md:h-[initial] "
            />
          </div>
          <div className="flex z-30 bg-white right-[93px] rounded-full h-[25px] w-[125px] md:w-[125px] md:h-[29px] lg:h-[3.25em] md:right-[-4rem] lg:w-fit py-[6px] md:py-3 px-2 pr-5 gap-3 items-center  absolute lg:relative  justify-center -ml-[7em] mt-[3em] ">
            <span className="bg-green-900 text-[10px] lg:text-[14px] rounded-[25px] text-white lg:rounded-full  h-[2.5em] w-[2.5em] flex text-center items-center justify-center">
              G
            </span>
            <span className="text-center text-[10px] lg:text-[14px]  justify-center items-center flex ">
              Gale Hillman
            </span>
          </div>
        </div>

        {/* Lady Image (moved up with negative margin) */}
        <div className="flex absolute md:bottom-[-20px] bottom-[-95px] left-[123px] md:left-[initial] md:top-0 right-0  items-end -mt-[3em] md:ml-[8em] md:relative ">
          <div className="flex bg-black rounded-full  left-[-30px] w-[120px] md:h-[29px] lg:h-[3.25em] lg:w-fit top-[99px] py-[6px] md:top-[7em] lg:top-0 md:left-[-67px] absolute lg:relative md:py-3 px-2 -mr-[7em] pr-5 gap-3  z-30 items-center justify-center  mb-[8em]">
            <span className="bg-orange-700 text-[10px] lg:text-[14px] rounded-[25px] text-white lg:rounded-full w-[25px] h-[25px] lg:h-[2.5em] lg:w-[2.5em] flex items-center justify-center">
              J
            </span>
            <span className="text-center text-[10px] lg:text-[14px] text-white justify-center items-center flex ">
              James Ade
            </span>
          </div>
          <div className="flex flex-col z-20  mb-7">
            <Image
              src={Man}
              alt="Lady image"
              className="w-[220px] h-[150px] md:w-[initial] md:h-[initial] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
