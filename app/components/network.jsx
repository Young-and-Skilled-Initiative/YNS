"use client";
import Lady from "@/public/lady.svg";
import Image from "next/image";
import Man from "@/public/man.svg";

const Network = () => {
  return (
    <div className="flex justify-between w-[100vw] px-[4em] py-[2em] items-center">
      {/* Left Side (Text and Button) */}
      <div className="flex flex-col gap-[2em] w-[50%]">
        <h1 className="font-cocon font-bold text-[50px] leading-[48.64px]">
          Go for Community and Networking
        </h1>
        <p className="font-manrope font-normal text-[16px] text-[#00000099]">
          Join a vibrant community of like-minded students and gain access to
          valuable networking opportunities.
        </p>
        <button className="bg-green-800 text-white w-[12em] p-5 rounded-full font-manrope font-normal text-[16px]">
          Network Now
        </button>
      </div>

      {/* Right Side (Images) */}
      <div className="w-[50%] flex flex-col relative">
        {/* Male Image */}
        <div className="z-0 ml-[2em]">
          <Image src={Man} alt="Man image" />
        </div>

        {/* Lady Image (moved up with negative margin) */}
        <div className="flex flex-col items-end -mt-[3em] relative z-10">
          <Image src={Lady} alt="Lady image" />
        </div>
      </div>
    </div>
  );
};

export default Network;
