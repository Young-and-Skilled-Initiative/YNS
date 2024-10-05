import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/newsletter/newsletter";
import NewsInsightsAndBlog from "../components/NewsInsightsAndBlog";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
        <NewsInsightsAndBlog/>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default page;
