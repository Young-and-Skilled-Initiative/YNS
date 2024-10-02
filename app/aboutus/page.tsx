import React from "react"
import TeamMembers from "./components/TeamMembers"
import WhoIsIntrested from "./components/WhoIsIntrested"
import TheYsiStory from "./components/TheYsiStory"
import Interest from "./components/interest"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const page: React.FC = () => {
  return (
    <>
    <Navbar/>
      <TheYsiStory />
      <Interest/>
      <div className="px-5 md:px-9 lg:px-[2.5rem]">
        <WhoIsIntrested />
        <TeamMembers />
        <Footer/>
      </div>
    </>
  )
}

export default page
