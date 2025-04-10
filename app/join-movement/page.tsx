"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import MovementHero from "./components/MovementHero";
import NewsInsightsAndBlog from "../components/news-insights-and-blog";
import Faq from "../components/faq";
import Footer from "../../components/Footer";

const JoinMovement = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-[100px] sm:px-[6.25em] px-5">
        <MovementHero />
        <NewsInsightsAndBlog />
        <Faq />
      </div>
      <div className="px-5 sm:px-[3.25em]"></div>
    </div>
  );
};

export default JoinMovement;
