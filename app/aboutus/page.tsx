import React from "react";
import TeamMembers from "./components/TeamMembers";
import WhoIsIntrested from "./components/WhoIsIntrested";

const page: React.FC = () => {
  return (
    <div className="px-5 md:px-9 lg:px-[2.5rem]">
      <WhoIsIntrested/>
      <TeamMembers />
    </div>
  );
};

export default page;
