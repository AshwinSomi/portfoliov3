import React from "react";

import userPic from "../assets/ash1.png";

import { Link } from "@tanstack/react-router";

export default function LandingPage() {
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
              <p className="pt-4 font-medium">Ashwin</p>
            </div>
          </div>
          <p className="text-zinc-400 pt-4 text-center ">
            I am working on this page... <br />
            Please check out my portfolio on Home{" "}
            {/* <Link
              className="hover: font-medium hover:text-zinc-300 "
              to="/home"
            >
              Home
            </Link> */}
          </p>
          <div>
            <Link
              to="/home"
              className="hover:bg-neutral-800/80 text-zinc-300  px-3 py-2.5 rounded-xl border border-zinc-400/25
           font-medium active:bg-opacity-50  duration-200 shadow "
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
