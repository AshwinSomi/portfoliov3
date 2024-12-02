import { Link } from "@tanstack/react-router";
import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" p-4 md:p-8 pb-20 md:pb-20 border-t border-zinc-200 border-opacity-25">
      <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-20 lg:gap-40 ">
        <div className="flex flex-wrap gap-6">
          <Link to="/" className="font-medium hover:text-teal-400">
            LandingPage
          </Link>
          <Link to="/home" className="font-medium hover:text-teal-400 ">
            Home
          </Link>

          <a
            href="https://ashwin065-portfolio.netlify.app/"
            // className={gradientUnderLine}
            target="blank"
            className="font-medium hover:text-teal-400 flex flex-row justify-center items-center gap-1 "
          >
            OldPortfolio
            <FaExternalLinkAlt size={10} />
          </a>
          <a
            href="https://github.com/AshwinSomi"
            // className={gradientUnderLine}
            target="blank"
            className="font-medium hover:text-teal-400 flex flex-row justify-center items-center gap-1 "
          >
            GitHub
            <FaExternalLinkAlt size={10} />
          </a>
          <a
            href=""
            target="blank"
            className="font-medium hover:text-teal-400 flex flex-row justify-center items-center gap-1 "
          >
            Resume
            <FaExternalLinkAlt size={10} />
          </a>
        </div>
        <div className="text-zinc-500 ">
          Created by Ashwin using React.js, Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
