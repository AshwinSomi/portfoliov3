import React from "react";
import pic1 from "../assets/trackDaily.png";
import { IoIosLink } from "react-icons/io";
import Projects from "./Projects";
import Contact from "./Contact";
import Media from "./Media";
import Footer from "./Footer";
import Profile from "./Profile";
import Education from "./Education";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <div className="flex-grow "> */}
      <Profile />
      {/* </div> */}
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Media />
    </div>
  );
}
