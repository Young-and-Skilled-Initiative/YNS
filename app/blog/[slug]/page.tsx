"use client";

import { blogCards } from "@/data"; // Ensure this contains all the blog card data
import Image from "next/image";

// Slugify utility function
const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

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
      <h1>{blogPost.title}</h1>
      <Image src={blogPost.image} alt={blogPost.title} width={600} height={400} />
      <p>{blogPost.description}</p>
      <p>{blogPost.date}</p>
    </div>
  );
};

export default BlogPost;
