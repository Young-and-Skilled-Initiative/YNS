import React from "react";

const BlogNewsletter = () => {
  return (
    <div className="bg-dark-green flex flex-col gap-y-7 items-center py-20 text-white rounded-[20px]" >
      <h1 className="font-cocon text-5xl font-medium">
        Want to enjoy more news like?
      </h1>
      <p className="font-normal text-[1rem] font-manrope">
        Sign up for our newsletter and receive more updates like this.
      </p>
      <div className="flex gap-x-2">
        <input type="text" placeholder="Enter your Email..." className="py-4 placeholder:text-white outline-none min-w-72 px-8 bg-[#FAFAFA66] rounded-[37px]" />
        <button className="rounded-[37px] py-4 px-7 text-black bg-white">Subscribe</button>
  
      </div>
    </div>
  );
};

export default BlogNewsletter;
