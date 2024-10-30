"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BlogCardList from "@/components/blog/BlogCardList";
import { blogCards } from "@/data"; // Ensure this contains all the blog card data
import Image from "next/image";
import BlogNewsletter from "./component/BlogNewsletter";
import {
  Facebook_green,
  Instagram_green,
  IntercomMessenger,
  Linkedin_green,
  Star4,
  Twitter_green,
} from "@/public/icons";
import Link from "next/link";

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
              width={0}
              height={0}
              src={Star4}
              alt="star"
              className=" w-20 cursor-pointer  animate-spin-slow"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          {" "}
          <div className="flex gap-x-5">
            {" "}
            <Image
              src={blogPost.author.image}
              alt={blogPost.title}
              width={0}
              height={0}
              className="w-20 "
            />
            <div className="flex flex-col justify-between py-[6px]">
              <p className="font-medium text-2xl ">{blogPost.author.name}</p>
              <p className="text-[#EF4C0D] text-base font-normal">
                {blogPost.date}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 text-right">
            <p className="text-[#8E9BAE] font-normal text-xl">Socials</p>
            <div className="flex gap-2.5">
              {" "}
              <Link href={blogPost.author.socials["twitter(X)"]}>
                {" "}
                <Image
                  width={0}
                  height={0}
                  src={Twitter_green}
                  alt="twitter"
                  className=" w-12   "
                />{" "}
              </Link>
              <Link href={blogPost.author.socials.facebook}>
                {" "}
                <Image
                  width={0}
                  height={0}
                  src={Facebook_green}
                  alt="facebook"
                  className=" w-12   "
                />{" "}
              </Link>{" "}
              <Link href={blogPost.author.socials.linkedin}>
                {" "}
                <Image
                  width={0}
                  height={0}
                  src={Linkedin_green}
                  alt="linkedin"
                  className=" w-12   "
                />{" "}
              </Link>{" "}
              <Link href={blogPost.author.socials.instagram}>
                {" "}
                <Image
                  width={0}
                  height={0}
                  src={Instagram_green}
                  alt="instagram"
                  className=" w-12   "
                />
              </Link>{" "}
            </div>
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
        <p className="font-manrope text-base leading-8 font-normal text-[#808080]">
          {blogPost.description}
        </p>
        <div className="flex flex-col gap-12">
          {" "}
          {blogPost.moreDescription.map((more, idx) => (
            <span key={idx} className=" flex flex-col gap-y-5 ">
              <p className="font-bold text-3xl">{more.title}</p>
              <p className="font-manrope text-base leading-8 font-normal text-[#808080]">
                {more.content}
              </p>
            </span>
          ))}
        </div>
        <BlogNewsletter />
        <p className="font-cocon text-5xl font-medium ">Stay Updated</p>
        <BlogCardList limit={3} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
