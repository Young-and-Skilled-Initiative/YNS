import { Sketch_Annotation, Smile, Star4 } from "@/public/icons";
import { Star } from "@/public/images";
import Image from "next/image";
import React from "react";

const BlogNewsletter = () => {
  return (
    <div className="bg-dark-green overflow-hidden relative flex flex-col gap-y-7 items-center text-center py-20 text-white rounded-[20px]">
      <h1 className="font-cocon text-4xl lg:text-5xl font-medium z-[1000]">
        Want to enjoy more news like?
      </h1>
      <p className="font-normal text-sm lg:text-base font-manrope">
        Sign up for our newsletter and receive more updates like this.
      </p>
      <div className="flex gap-x-2 text-sm">
        <input
          type="text"
          placeholder="Enter your Email..."
          className="py-4 placeholder:text-white outline-none lg:min-w-72 px-8 bg-[#FAFAFA66] rounded-[37px]"
        />
        <button className="rounded-[37px] py-4 px-7 text-black bg-white">
          Subscribe
        </button>
      </div>
      <Image
        width={20}
        height={20}
        src={Star}
        alt="star"
        className="absolute left-[2%] lg:left-[5%] top-[25%] w-20 cursor-pointer  "
      />
      <Image
        width={20}
        height={20}
        src={Sketch_Annotation}
        alt="sketch"
        className="absolute left-0 bottom-0 w-20 cursor-pointer  "
      />
      <Image
        width={20}
        height={20}
        src={Smile}
        alt="smile"
        className="absolute right-0 top-[50%] w-20 cursor-pointer  "
      />

      <Image
        width={20}
        height={20}
        src={Star4}
        alt="star"
        className="absolute right-[25%] -bottom-5 w-20 cursor-pointer  "
      />
    </div>
  );
};

export default BlogNewsletter;
