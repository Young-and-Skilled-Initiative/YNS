import { blogCards } from "@/data";
import { ArrowRight } from "lucide-react";
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
    <div className="slider-container text-black w-full flex flex-col justify-center px-6 md:px-24 py-3 md:py-12 font-manrope">
      {" "}
      <Slider {...settings}>
        {blogCards.map((card, index) => (
          <div key={index} className="md:pb-6">
            <div className="flex flex-col md:flex-row">
              <div className="relative md:w-1/2">
                {" "}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
                <p className="text-[0.5625rem] md:text-base absolute top-0 left-0 px-4 py-2 rounded-tl-[1.25rem] bg-dark-green text-white">
                  Featured
                </p>
              </div>
              <div className="md:px-14 py-5 flex flex-col gap-4 text-left md:w-1/2">
                <div className="flex gap-5">
                  {card.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-base font-medium text-gray-400  "
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-medium font-cocon leading-9 ">
                  {card.title}
                </h3>
                <p className=" text-gray-600 text-base leading-8 ">
                  {card.description}
                </p>
                <p className="text-gray-400 text-base ">{card.date}</p>

                <button className="flex gap-3 ">
                  Read Article <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogFeatured;
