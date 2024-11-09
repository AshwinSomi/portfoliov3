import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Media() {
  return (
    <div className="py-10 px-2  sm:px-12 md:px-24">
      <div className=" flex flex-col items-start md:flex-row gap-5 md:gap-10 md:border-l border-zinc-500 border-opacity-20 ">
        <div className="font-medium px-0 md:px-6 ">Media</div>
        {/* text-[#1ddbb5]  */}
        <div className="flex p-2 md:px-9 gap-5 md:gap-10 ">
          <a
            href="https://github.com/AshwinSomi"
            className="bg-zinc-800/90 rounded-full shadow-md flex items-center justify-center w-[44px] aspect-square
    duration-150 hover:scale-105 active:scale-100 active:bg-zinc-900 
    border border-zinc-500 border-opacity-10 active:border-zinc-800  group "
            target="blank"
          >
            <FaGithub
              size={28}
              className="group-active:brightness-75 transition-all "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
