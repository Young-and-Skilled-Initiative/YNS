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

      {/* Star decoration */}
      <div className="absolute top-10 right-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="orange"
          className="w-8 h-8"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </section>
  );
};

export default NewsAndInsightsBlogHero;
