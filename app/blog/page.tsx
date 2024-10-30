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
      <div className="px-6  md:px-16 lg:px-24">
      <BlogCardList />
      </div>
      <div className="px-6 md:px-12 lg:px-24 py-6 md:py-8 lg:pt-16 lg:pb-4">
        {" "}
        {/*temporal till the paddings are fixed by creator of Newsletter */}
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default page;
