import { BlogCardData } from "@/types";
import React from "react";

const BlogCard: React.FC<BlogCardData> = ({ category, title, date, image }) => {
  return (
    <div className="flex flex-col rounded-lg gap-3">
      <div className="flex justify-center mb-3">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <div className="text-sm text-gray-500 space-x-2">
        {category.map((cat, i) => (
          <span
            className="font-medium text-base font-manrope text-[#8E9BAE]"
            key={i}
          >
            {cat}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-medium font-cocon">{title}</h3>
      <p className="text-[#8E9BAE] font-manrope font-medium">{date}</p>
    </div>
  );
};

export default BlogCard;
