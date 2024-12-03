import { BlogCardData } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import Image component from Next.js

// Slugify utility function
const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
};

const BlogCard: React.FC<BlogCardData> = ({ category, title, date, image }) => {
  return (
    <Link href={`/blog/${generateSlug(title)}`}>
      <div className="flex flex-col rounded-lg gap-3 justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center mb-3">
            {/* Replace img with Image component */}
            <Image
              src={image} // Image source
              alt={title} // Alt text for the image
              className="w-full h-full" // Optional: styling, can be modified
              width={500} // Provide a width value
              height={300} // Provide a height value (or adjust to your needs)
              objectFit="cover" // Ensure the image fits within the container
            />
          </div>
          <div className="text-sm text-gray-500 space-x-2">
            {category.map((cat, i) => (
              <span
                className="font-medium text-base font-manrope text-gray-400"
                key={i}
              >
                {cat}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-medium font-cocon">{title}</h3>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 font-manrope font-medium">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
