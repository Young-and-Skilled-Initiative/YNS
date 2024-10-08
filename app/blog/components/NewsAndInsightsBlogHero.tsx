import { Star } from "@/public/images";
import Image from "next/image";
import React from "react";

const NewsAndInsightsBlogHero = () => {
  const categories = ["All", "Education", "Career", "Company", "Courses"];
  const backgroundImage = "/images/blog-hero.png"; // Update this with your image path
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-dark-green text-white py-24 relative p-6 md:p-24"
    >
      <div className="flex flex-col gap-12 text-left font-manrope">
        {/* Title */}
        <div className="flex flex-col gap-4 ">
          <div className="relative flex gap-14 w-fit ">
            <h1 className="text-7xl  font-medium ">
              News Insights & <span className="bg-nine-color-blocks text-transparent bg-clip-text">Blog</span>
            </h1>

            <div>
              <Image
                src={Star}
                width={100}
                height={100}
                alt="star"
                className="absolute bottom-6"
              />
            </div>
          </div>
          {/* Subtitle */}
          <p className="text-base ">
            Latest community tips for you. Dive into our latest posts, explore
            various learning categories, and stay informed <br /> about the best
            practices in education.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex  space-x-5">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${
                index === 0 ? "bg-white text-black" : "bg-white/30 text-white"
              } py-4 backdrop-blur-4 px-10 rounded-[2.75rem] hover:bg-white hover:text-black transition-all duration-500 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndInsightsBlogHero;
