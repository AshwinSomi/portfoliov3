import React from "react";
import nectar from "../assets/nectar.png";
import newtab from "../assets/newtab.png";
import persistent from "../assets/persistent.png";
import staples from "../assets/staples.png";

export default function Work() {
  return (
    <div className="py-10 px-2  sm:px-12 md:px-24">
      <div className=" flex flex-col md:flex-row gap-5 md:gap-10 md:border-l md:border-dashed border-zinc-300 border-opacity-20 ">
        <div className="font-medium p-0 md:px-6 ">Work</div>
        <div className="grid grid-flow-row-dense grid-cols-3 ">
          <div className="p-4 md:p-8 col-span-2 border-r border-b border-dashed border-zinc-300/20">
            <div className="flex flex-row gap-4 items-center ">
              <div className=" shrink-0 ">
                <img src={nectar} className="h-8 w-auto rounded-full " />
              </div>
              <div>
                <p className="font-medium ">Nectar Info Tek</p>
                <p className="text-zinc-400 ">
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 col-span-1 border-l border-b border-dashed border-zinc-300/20">
            <p className="text-zinc-400 ">Jun 2024 - Till</p>
          </div>
          <div className="p-4 text-zinc-400 md:p-8 col-span-1 border-r border-b border-dashed border-zinc-300/20">
            May 2023 - April 2024
          </div>
          <div className="p-4 md:p-8 col-span-2 border-l border-b border-dashed border-zinc-300/20">
            <div className="flex flex-row gap-4 items-center ">
              <div className="shrink-0 ">
                <img src={staples} className="h-8 w-auto rounded-full " />
              </div>
              <div>
                <p className="font-medium ">Staples</p>
                <p className="text-zinc-400 ">
                  Worked on a full stack project to manage
                  metadata in user's dashboard{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8 col-span-2 border-r border-b border-dashed border-zinc-300/20">
            <div className="flex flex-row gap-4 items-center ">
              <div className="shrink-0 ">
                <img src={persistent} className="h-8 w-auto rounded-full " />
              </div>
              <div>
                <p className="font-medium ">Persistent Systems</p>
                <p className="text-zinc-400 ">
                  Worked on developing and testing Core Java applications, also
                  have worked on React.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 text-zinc-400  md:p-8 col-span-1 border-l border-b border-dashed border-zinc-300/20">
            Feb 2022 - July 2022
          </div>
          <div className="p-4 text-zinc-400  md:p-8 col-span-1 border-r  border-dashed border-zinc-300/20">
            Aug 2020
          </div>
          <div className="p-4 md:p-8 col-span-2 border-l  border-dashed border-zinc-300/20">
            <div className="flex flex-row gap-4 items-center ">
              <div className="shrink-0 ">
                <img src={newtab} className="h-8 w-auto rounded-full " />
              </div>
              <div>
                <p className="font-medium ">NewTab Technologies</p>
                <p className="text-zinc-400 ">
                  Learned, Designed and Developed blog website using JavaScript,
                  HTML, CSS.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
