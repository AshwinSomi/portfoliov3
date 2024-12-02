import React from "react";
import { CiLocationOn } from "react-icons/ci";
import userPic from "../assets/ash1.png";

export default function Profile() {
  return (
    <div className="pt-8">
      <div className="py-10 px-2 sm:px-12 md:px-24">
        <div
          className="flex flex-row p-2 md:px-6 py-6 md:flex-row gap-5 md:gap-10 justify-around 
        md:border-0 border-dashed border-zinc-300/20 md:items-center"
        >
          <div className="p-0 md:p-8 flex flex-col gap-5 max-w-[500px] font- text-zinc-400 md:border-0 border-dashed border-zinc-400/25 ">
            <p className=" ">Hello I am Ashwin, I am a developer.</p>
            <p className=" ">
              <span className="">
                I am currently working as a Software developer at Nectar Info
                Tek.
              </span>{" "}
              <br /> I am Interested in learning and developing new things
              across different technologies.
            </p>
            <p className="">
              And, I recently completed my Master's in Computer Science from
              Northern Arizona University.
            </p>
            <p className="flex flex-row items-center">
              <CiLocationOn size={16} className="text-zinc-300 " />
              Flagstaff, Arizona
            </p>
          </div>
          <div className="flex-shrink-0 ">
            <img
              src={userPic}
              className="rounded-full h-24 sm:h-36 mx-auto md:h-44 "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
