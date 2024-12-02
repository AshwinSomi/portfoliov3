import React from "react";
import Contact from "./Contact";
import Media from "./Media";
import Profile from "./Profile";
import Projects from "./Projects";
import Work from "./Work";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <div className="flex-grow "> */}
      <Profile />
      {/* </div> */}
      <Work />
      <Projects />
      {/* <Education /> */}
      <Media />
      <Contact />
    </div>
  );
}
