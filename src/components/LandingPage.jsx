import React, { useEffect, useState } from "react";

import userPic from "../assets/ash1.png";

import { Link } from "@tanstack/react-router";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate relative position (0 to 1) within the window
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pt-10">
      <div className=" px-2  sm:px-12 md:px-24">
        <div className="flex flex-col gap-6 items-center ">
          <div className=" flex flex-col gap-5 items-center ">
            <div className="flex-shrink-0 ">
              <img
                src={userPic}
                className="rounded-full h-24 sm:h-36 mx-auto  "
              ></img>
            </div>
            <div>
              <p className="font-medium">Ashwin</p>
            </div>
          </div>
          <p className="text-zinc-400 pt-4 text-center ">
            This is LandingPage
            <br />I am still working on this page... <br />
            Please check out my portfolio on{" "}
            <Link
              className="hover: font-medium hover:text-zinc-300 "
              to="/home"
            >
              Home
            </Link>
          </p>
          {/* <div>
            <Link
              className="bg-zinc-800/90 text-zinc-400 hover:text-zinc-300 p-3 rounded-xl border border-zinc-500 border-opacity-20
          hover:border-opacity-40 font-medium active:bg-opacity-50 active:border-opacity-20 duration-200 shadow "
              
            >
              Go to Home
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
