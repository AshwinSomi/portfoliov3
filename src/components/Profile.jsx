import React from "react";
import userPic from "../assets/ash1.png";
import { CiLocationOn } from "react-icons/ci";

export default function Profile() {
  return (
    <div className="pt-10">
      <div className="py-10 px-2  sm:px-12 md:px-24">
        <div className="flex flex-row p-2 md:px-6 md:flex-row gap-5 md:gap-10 justify-around">
          <div className="p-0 md:p-8 flex flex-col gap-5 max-w-[500px] text-zinc-400 ">
            <p className="text-zinc-400 ">
              Hello I am Ashwin, I am a developer.
            </p>
            <p>
              I am currently working as a Software developer at Nectar Info Tek.{" "}
              <br /> I am Interested in learning and developing new things
              across different technologies.
            </p>
            <p>
              And, I recently completed my Master's in Computer Science from
              Northern Arizona University.
            </p>
            <p className="flex flex-row items-center">
              <CiLocationOn size={16} />
              Flagstaff, Arizona
            </p>
          </div>
          <div className="flex-shrink-0  ">
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
