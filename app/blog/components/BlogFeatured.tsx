import { blogCards } from "@/data";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Slider from "react-slick";

const BlogFeatured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
  <div className="slider-container text-black w-full flex flex-col justify-center">  <Slider {...settings}>
  {blogCards.map((card, index) => (
    <div key={index}>
      <div className="flex">
        <div className="relative w-1/2">
          {" "}
          <img
            src={card.image}
            alt={card.title}
            className="w-24 h-24 object-cover rounded-3xl"
          />
          <p className="absolute top-0 left-0 px-4 py-2 rounded-tl-3xl">Featured</p>
        </div>
        <div className="px-14 py-5 flex flex-col gap-4 text-left w-1/2">
          <div className="flex gap-5">
            {card.category.map((cat, idx) => (
              <span
                key={idx}
                className="text-base font-medium text-gray-300 px-2 py-1 "
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-medium font-cocon">{card.title}</h3>
          <p className=" text-gray-600 text-base  font-manrope">
            {card.description}
          </p>
          <p className="text-gray-500 text-base font-manrope">
            {card.date}
          </p>
          <p>
            <button>
              Read Article <ArrowLeft />
            </button>
          </p>
        </div>
      </div>
    </div>
  ))}
</Slider></div>
  );
};

export default BlogFeatured;
