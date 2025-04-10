import Image from "next/image";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Resources from "./components/resources";
import Newsletter from "./components/newsletter";
import AboutUs from "./components/about-us";
import Hero from "./components/hero";
import NewsInsightsAndBlog from "./components/news-insights-and-blog";
import PersonalizedLearning from "./components/personalized-learning";
import OurStory from "./components/our-story";
import FAQ from "./components/faq";
import { Testimonial } from "./components/testimonial";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <AboutUs />
      <PersonalizedLearning />

      <main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-16 lg:px-24 py-6 md:py-8">
        <Resources />
        <OurStory />
        <Testimonial />
        <Newsletter />
        <NewsInsightsAndBlog />
        <FAQ className={undefined} />
      </main>
      {/* <Network /> */}
      <Footer />
    </>
  );
}
