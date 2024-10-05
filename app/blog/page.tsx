import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/newsletter/newsletter";

import BlogCardList from "@/components/BlogCardList";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
        <BlogCardList/>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default page;
