import React from "react";
import TeamMembers from "./components/TeamMembers";
import WhoIsIntrested from "./components/WhoIsIntrested";
import TheYsiStory from "./components/TheYsiStory";
import Values from "./components/Values";
import Interest from "./components/interest";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Faq from "../components/faq";
import AboutHero from "./components/AboutHero";

const page: React.FC = () => {
  return (
    <>
      <AboutHero />
      <TheYsiStory />
      <Values />
      <Interest />
      <div className="px-5 md:px-9 lg:px-[2.5rem]">
        <WhoIsIntrested />
        <TeamMembers />
        <Faq />
      </div>
    </>
  );
};

export default page;
