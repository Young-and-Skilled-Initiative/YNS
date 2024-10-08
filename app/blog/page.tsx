"use client";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/newsletter/newsletter";
import BlogCardList from "@/components/BlogCardList";
import BlogHero from "./components/BlogHero";
import BlogFeatured from "./components/blogFeatured";

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 ">
        <BlogFeatured />
        <BlogCardList />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default page;
