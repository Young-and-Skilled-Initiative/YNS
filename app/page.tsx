import Image from "next/image";
import FAQ from "@/app/components/faq/faq";
import Navbar from "./components/Navbar";
import Network from "@/app/components/network";
import { Testimonial } from "./components/Testimonial";
import Footer from "./components/Footer";
import Resources from "./components/resources";
import Hero from "./components/hero/hero";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero/>
        <Resources/>
        <Network />
        <FAQ />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
