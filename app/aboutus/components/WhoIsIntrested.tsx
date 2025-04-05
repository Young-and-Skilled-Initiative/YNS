
import React from "react";
import inStar1 from "@/public/images/inStar1.svg";
import inStar2 from "@/public/images/inStar2.svg";
import inStar3 from "@/public/images/inStar3.svg";
import InterestCard from "./interestcard";

const WhoIsInterested = () => {
  const interestData = [
    {
      title: "Gaining new skills",
      description: "Whether you're looking to upskill for your current job or start a new career, we can help.",
      imageUrl: inStar1,
      bgColor: "bg-[#114F3C]"
    },
    {
      title: "Networking with like minds",
      description: "Connect with professionals who share your goals and open doors for career growth and opportunities.",
      imageUrl: inStar2,
      bgColor: "bg-[#98BC6D]"
    },
    {
      title: "Gaining new skills", // Note: this title appears to be duplicated in the original
      description: "Whether you're looking to upskill for your current job or start a new career, we can help.",
      imageUrl: inStar3,
      bgColor: "bg-[#EF4C0D]"
    }
  ];

  return (
    <div className="w-full h-full bg-white container max-w-[1500px] mx-auto px-[1em] lg:px-0 ">
      <div className="pt-10 flex flex-col gap-8">
        <div className="w-full md:max-w-[803px] flex flex-col gap-5">
          <h1 className="font-cocon text-[30px] md:text-[40px]">
            Who we are interested in?
          </h1>
          <p className="font-manrope leading-[32px] text-[16px] font-normal">
            We`re looking for curious, motivated individuals who are
            passionate about learning and growth. If you`re interested in
          </p>
        </div>
        <div className="flex flex-col justify-between items-center md:flex-row gap-5 ">
          {interestData.map((item, index) => (
            <InterestCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoIsInterested;