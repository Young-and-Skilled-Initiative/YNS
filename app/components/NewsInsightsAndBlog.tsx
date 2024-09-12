import React from "react";

interface Card {
  category: string[];
  title: string;
  date: string;
  image: string;
}

const cards: Card[] = [
  {
    category: ["Education", "Courses"],
    title: "How to Stay Motivated During Online Courses",
    date: "August 30, 2024",
    image: "/news_and_blog_1.svg", // Example, replace with actual image path
  },
  {
    category: ["Product", "Courses"],
    title: "The Importance of Networking in Building a Successful Career",
    date: "August 28, 2024",
    image: "/news_and_blog_2.svg", // Example, replace with actual image path
  },
  {
    category: ["Product", "Education", "Ecosystem"],
    title: "Balancing School and Life: Tips for Effective Time Management",
    date: "August 23, 2024",
    image: "/news_and_blog_3.svg", // Example, replace with actual image path
  },
];

const NewsInsightsAndBlog = () => {
  return (
    <div className="flex flex-col gap-12 py-12">
      <div className="flex flex-col gap-7">
        <p className="font-medium text-base leading-4 text-center bg-[#FAFAFA] text-[#8E9BAE] rounded-[30px] py-2 px-6 w-fit">
          Blog
        </p>

        <div className=" flex flex-col gap-7">
          <p className="text-[#2F2F2F] font-cocon text-[50px] leading-[55px] font-medium">
            News Insights & Blog
          </p>
          <p className="text-base leading-7 text-[#55534E]">Latest community tips for you</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col  rounded-lg gap-3">
            <div className="flex justify-center mb-3">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full"
              />
            </div>
            <div className="text-sm text-gray-500 space-x-2 ">
              {card.category.map((cat, i) => (
                <span
                  className="font-medium text-base font-manrope text-[#8E9BAE]"
                  key={i}
                >
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-medium font-cocon">{card.title}</h3>
            <p className="text-[#8E9BAE] font-manrope font-medium">
              {card.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsInsightsAndBlog;
