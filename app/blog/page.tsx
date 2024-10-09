"use client";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/newsletter/newsletter";
import BlogCardList from "@/components/blog/BlogCardList";
import BlogHero from "./components/BlogHero";
import BlogFeatured from "./components/BlogFeatured";

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <BlogFeatured />
      <BlogCardList />
      <div className="px-6 md:px-24 py-6 md:py-12"> {/*temporal till the paddings are fixed by creator of Newsletter */}
        <Newsletter />
      </div>
     <div className="pt-6"> {/*temporal till the paddings are fixed by creator of the footer */}
    <Footer />
    </div>
    </div>
  );
};

export default page;
