"use client";
import React from "react";
import Navbar from "../components/Navbar";
import MovementHero from "./components/MovementHero";
import NewsInsightsAndBlog from "../components/NewsInsightsAndBlog";
import FAQ from "../components/faq/faq";
import Footer from "../components/Footer";

export const JoinMovement = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-[100px] sm:px-[6.25em] px-5">
        <MovementHero />
        <NewsInsightsAndBlog />
        <FAQ/>
      </div>
      <div className="px-5 sm:px-[3.25em]">
        <Footer />
      </div>
    </div>
  );
};

export default JoinMovement;
