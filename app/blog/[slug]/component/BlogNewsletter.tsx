import { Sketch_Annotation, Smile, Star4 } from "@/public/icons";
import { Star } from "@/public/images";
import Image from "next/image";
import React from "react";

const BlogNewsletter = () => {
  return (
    <div className="bg-dark-green overflow-hidden relative flex flex-col gap-y-7 items-center text-center px-6 py-24 md:py-20 text-white rounded-[20px]">
      <h1 className="font-cocon text-[2.5rem] lg:text-5xl font-medium z-[1000]">
        Want to enjoy more news like this?
      </h1>
      <p className="font-normal text-base font-manrope">
        Sign up for our newsletter and receive more updates like this.
      </p>
      
      {/* Input and Button */}
      <div className="flex flex-col md:flex-row gap-2 text-base w-full mt-5">
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your Email..."
          className="py-4 placeholder:text-white outline-none px-8 bg-[#FAFAFA66] rounded-[37px] lg:min-w-[300px] md:min-w-[250px] min-w-[200px]"
        />
        <button 
          className="rounded-[37px] w-full md:w-auto py-4 px-7 text-black bg-white mt-4 md:mt-0"
          aria-label="Subscribe to newsletter"
        >
          Subscribe
        </button>
      </div>

      {/* Decorative Images */}
      <div className="absolute inset-0 z-[1]">
        <Image
          width={40} 
          height={40} 
          src={Star}
          alt="Star Decoration"
          className="absolute left-[2%] lg:left-[5%] top-0 md:top-[25%] w-20 cursor-pointer"
          aria-label="Star decoration"
        />
        <Image
          width={40}
          height={40}
          src={Sketch_Annotation}
          alt="Sketch decoration"
          className="absolute left-0 bottom-0 w-20 cursor-pointer"
          aria-label="Sketch decoration"
        />
        <Image
          width={40}
          height={40}
          src={Smile}
          alt="Smile decoration"
          className="absolute right-0 top-[35%] md:top-[50%] w-20 cursor-pointer"
          aria-label="Smile decoration"
        />
        <Image
          width={40}
          height={40}
          src={Star4}
          alt="Star decoration"
          className="absolute right-0 md:right-[25%] bottom-0 md:-bottom-5 w-20 cursor-pointer"
          aria-label="Star decoration"
        />
      </div>
    </div>
  );
};

export default BlogNewsletter;
