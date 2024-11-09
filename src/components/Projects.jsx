import React from "react";
import pic1 from "../assets/trackDaily.png";
import { IoIosLink } from "react-icons/io";

export default function Projects() {
  return (
    <div className="py-10 px-2  sm:px-12 md:px-24">
      <div className=" flex flex-col md:flex-row gap-5 md:gap-10 md:border-l border-zinc-500 border-opacity-20 ">
        <div className="font-medium p-0 md:px-6 ">Projects</div>
        {/* grid grid-cols-1 lg:grid-cols-2 gap-10 */}
        <div className="grid  lg:grid-cols-2 lg:grid-flow-row gap-10 ">
          <div className="row-span-2 flex flex-col gap-3 group hover:bg-zinc-800  p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] relative ">
            <p className="font-medium ">Tract Daily</p>
            <p className="text-zinc-400 pb-2 ">
              Lets you track you mood and wite you thoughts for that day through
              out the month, year, ....
              <br />
              Used firebase to provide Authentication and store data.
            </p>
            <img
              alt="web page img"
              src={pic1}
              className="w-48 md:w-64 mx-auto filer grayscale-[10%] rounded-xl
             hover:scale-105 hover:rounded-2xl transition hover:grayscale-[0%] duration-200  "
            />
            <div className="flex flex-wrap gap-1 pt-2 text-zinc-400 ">
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Next.js
              </span>
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Tailwind CSS
              </span>
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Firebase
              </span>
            </div>
            <div className="flex gap-3 ">
              <a
                href="https://ashwin065-track-daily.netlify.app/"
                className="group-hover:text-[#1ddbb5] font-medium pt-4 flex flex-row gap-1 "
              >
                <IoIosLink size={18} />
                Track-daily
              </a>
              <a
                href="https://github.com/AshwinSomi/track_daily-next-app"
                className="group-hover:text-[#1ddbb5] font-medium pt-4 flex flex-row gap-1 "
              >
                <IoIosLink size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className=" row-span-1 flex flex-col group gap-3 hover:bg-zinc-800 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">Quiz App</p>
            <p className="text-zinc-400">
              Lets you take a quiz of set of 10 questions.
            </p>
            <div className="flex flex-wrap gap-1 pt-1 text-zinc-400 ">
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                React.js
              </span>
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                CSS
              </span>
            </div>
            <a
              href="https://github.com/AshwinSomi/React_quizApplication_1/tree/main/quiz_app_1"
              className="group-hover:text-[#1ddbb5] font-medium pt-4 flex flex-row gap-1 "
            >
              <IoIosLink size={18} />
              GitHub
            </a>
          </div>
          <div className="row-span-1 flex flex-col group gap-3 hover:bg-zinc-800 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">News Analyzer</p>
            <p className="text-zinc-400">
              lets you analyze positivity and negativity of published new of a
              specific new publisher.
              <br />
              Used Beautifulsoup to scrap news and CSV to store data.
            </p>
            <div className="flex flex-wrap gap-1 pt-1 text-zinc-400 ">
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Python3
              </span>
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Pandas
              </span>
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Vader-sentiment-analyser
              </span>
            </div>
            <a
              href="https://github.com/AshwinSomi/News-Analyzer"
              className="group-hover:text-[#1ddbb5] font-medium pt-4 flex flex-row gap-1 "
            >
              <IoIosLink size={18} />
              GitHub
            </a>
          </div>
          <div className="row-span-1 flex flex-col group gap-3 hover:bg-zinc-800 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">Path Visualizer</p>
            <p className="text-zinc-400">
              A path visualizer game that uses A* path finding algorithm to find
              shortest route.
              <br />
              Used Pygame to create dashboard for the game
            </p>
            <div className="flex flex-wrap pt-1 gap-1 text-zinc-400 ">
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Python3
              </span>
              <span className="bg-zinc-900 px-2 py-1 rounded-xl shadow ">
                Pygame
              </span>
            </div>
            <a className="group-hover:text-[#1ddbb5] font-medium pt-4 flex flex-row gap-1 ">
              <IoIosLink size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
