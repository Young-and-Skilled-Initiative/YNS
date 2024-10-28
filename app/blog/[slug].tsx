import { useRouter } from "next/router";
import { blogCards } from "@/data"; // Assuming this contains all the blog cards data

// Slugify utility function
const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
};

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
console.log("nothing")
  // Find the blog post by the slug
  const blogPost = blogCards.find((card) => generateSlug(card.title) === slug);

  console.log("blogpost", blogPost);
  if (!blogPost) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <img src={blogPost.image} alt={blogPost.title} />
      <p>{blogPost.description}</p>
      <p>{blogPost.date}</p>
    </div>
  );
};

export default BlogPost;
