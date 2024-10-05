import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/newsletter/newsletter";

import BlogCardList from "@/components/BlogCardList";
import NewsAndInsightsBlogHero from "./components/NewsAndInsightsBlogHero";

const page = () => {
  return (
    <div>
      <Navbar />
      <NewsAndInsightsBlogHero/>
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 ">
        <BlogCardList/>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default page;
