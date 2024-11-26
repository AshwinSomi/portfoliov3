import React from "react";

export default function () {
  return (
    <div className="py-10 px-2  sm:px-12 md:px-24">
      <div className=" flex flex-col items-start md:flex-row gap-5 md:gap-10 md:border-l border-zinc-500 border-opacity-20 ">
        <div className="font-medium px-0 md:px-6 ">Contact</div>
        <div className="flex flex-col p-2 md:px-6 md:flex-row gap-5 md:gap-10 font-medium text-teal-400 ">
          <a href="mailto:ashwinsomi@gmail.com" className="hover:underline ">
            ashwinsomi@gmail.com
          </a>
          <a href="tel:+1928-814-1768">+1 928-814-1768</a>
        </div>
      </div>
    </div>
  );
}
