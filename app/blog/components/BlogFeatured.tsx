import { blogCards } from "@/data";
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
    <Slider {...settings}>
      {blogCards.map((card, index) => (
        <div key={index}>
          <div className=" flex ">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="px-14 py-5 flex flex-col gap-4">
              <div className="flex gap-5">
                {card.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="text-base font-medium text-gray-600 px-2 py-1 "
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.date}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BlogFeatured;
