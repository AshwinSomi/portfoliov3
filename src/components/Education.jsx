import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import bvritPic from "../assets/bvrit.png";
import nauPic from "../assets/nau.png";

export default function Education() {
  return (
    <div className="py-10 px-4  sm:px-12 md:px-24">
      <div className=" border border-zinc-500 border-opacity-20 rounded-2xl max-w-[500px] p-6 ">
        <div className="font-medium flex flex-row gap-3 items-center">
          <IoSchoolOutline size={28} className="font-bold " />
          Education
        </div>
        <div className="flex flex-col pt-6 gap-6 ">
          <div className="flex flex-row gap-4">
            <div>
              <div className="bg-zinc-800/90 rounded-full flex items-center justify-center w-[44px] border border-zinc-500 border-opacity-20 aspect-square ">
                <img src={nauPic} className="h-7 rounded-full " />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium ">Northern Arizona University</div>
              <div className="text-zinc-400 flex  gap-20">
                <div>Master of Science in Computer Science</div>
                <div>2022-2024</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <div className="bg-zinc-800/90 rounded-full flex items-center justify-center w-[44px] border border-zinc-500 border-opacity-20 aspect-square ">
                <img src={bvritPic} className="h-7 rounded-full opacity-90 " />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium ">BVRIT</div>
              <div className="text-zinc-400 flex gap-12">
                <div>
                  Bachelor of Technology in <br />
                  Electronics and Communication Engineering
                </div>
                <div>
                  <br />
                  2018-2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
