"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BlogCardList from "@/components/blog/BlogCardList";
import { blogCards } from "@/data"; // Ensure this contains all the blog card data
import Image from "next/image";
import BlogNewsletter from "./component/BlogNewsletter";
import { IntercomMessenger, Star4 } from "@/public/icons";

// Slugify utility function
const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Define the type for params
interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
  const { slug } = params;

  // Find the blog post by the slug
  const blogPost = blogCards.find((card) => generateSlug(card.title) === slug);

  if (!blogPost) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="px-6  md:px-16 lg:px-24 flex flex-col gap-9">
        <div className="flex gap-5">
          {blogPost.category.map((cat, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-black px-7 py-3 bg-[#98BC6D] rounded-[31px] "
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between relative">
          {" "}
          <h1 className="font-cocon font-medium text-5xl">
            {blogPost.title}
          </h1>{" "}
          <div>
            {" "}
            <Image
              width={20}
              height={20}
              src={Star4}
              alt="star"
              className=" w-20 cursor-pointer  "
            />
          </div>
        </div>
        <div className="relative">
          {" "}
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            width={0}
            height={0}
            className="w-full  object-cover h-[40rem] rounded-[35px]"
          />
          <Image
            width={20}
            height={20}
            src={IntercomMessenger}
            alt="messenger"
            className="absolute -right-4 top-[48%] w-20 cursor-pointer "
          />
        </div>
        <p>{blogPost.description}</p>
        <p>{blogPost.date}</p>

        <BlogNewsletter />
        <p className="font-cocon text-5xl font-medium">Stay Updated</p>
        <BlogCardList limit={3} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
