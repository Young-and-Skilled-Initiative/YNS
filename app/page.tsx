import Image from "next/image";
import FAQ from "@/app/components/faq/faq";
import Network from "@/app/components/network";
import { Testimonial } from "./components/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>yound and skilled</h1>
      <Network />
      <FAQ />
      <Testimonial />
    </main>
  );
}
