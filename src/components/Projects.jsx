import React from "react";
import { IoIosLink } from "react-icons/io";
import messageApp1 from "../assets/messageApp1.png";
import messageApp2 from "../assets/messageApp2.png";
import messageApp3 from "../assets/messageApp3.png";
import pic1 from "../assets/trackDaily.png";

export default function Projects() {
  return (
    <div className="py-10 px-2  sm:px-12 md:px-24">
      <div className=" flex flex-col md:flex-row gap-5 md:gap-10 md:border-l md:border-dashed border-zinc-300 border-opacity-20 ">
        <div className="font-medium p-0 md:px-6 ">Projects</div>
        {/* grid grid-cols-1 lg:grid-cols-2 gap-10 */}

        <div className="grid  lg:grid-cols-2 lg:grid-flow-row gap-10 ">
          <div className="row-span-2 flex flex-col gap-3 group bg-neutral-950 hover:bg-neutral-900  p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] relative ">
            <p className="font-medium ">Messaging App</p>
            <p className="text-zinc-400 pb-2 ">
              A realtime message app that lets to connect with your friends in
              the app and text them.
              <br />
              Stored all data in Redis, and authenticated user with Google
              Oauth2.0, Next-Auth.
              <br />
              Implemented Pub/Sub using Pusher for real time communication
            </p>
            <div className="snap-x snap-start h-40 lg:h-48 md:h-48 overflow-x-scroll flex space-x-4 scrollbar-hide grayscale-[25%] group-hover:grayscale-[0%] transition duration-200 hover:scale-105 ">
              <div className="snap-center shrink-0 h-full ">
                <img
                  alt="web page img"
                  src={messageApp1}
                  className="w-full h-full object-cover rounded-lg  "
                />
              </div>
              <div className="snap-center shrink-0 h-full  ">
                <img
                  alt="web page img"
                  src={messageApp2}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>
              <div className="snap-center shrink-0 h-full  ">
                <img
                  alt="web page img"
                  src={messageApp3}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-1 pt-2 text-zinc-400 ">
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Next.js
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Tailwind CSS
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                TypeScript
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Redis
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Next-Auth
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                OAuth2.0
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Pusher
              </span>
            </div>
            <div className="text-zinc-400 ">
              <details>
                <summary>Things to add</summary>
                <p>
                  -A audio transcriber to transcribe user recorded audio to text
                  <br />
                  -Issue interacting with database in production
                  <br />
                  -New pub/sub model{" "}
                </p>
              </details>
            </div>
            <div className="flex gap-3 ">
              {/* <a
                href=""
                className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 "
              >
                <IoIosLink size={18} />
                MessagingApp
              </a> */}
              <a
                href="https://github.com/AshwinSomi/messagingApp"
                className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 "
              >
                <IoIosLink size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className=" hidden row-span-1 lg:flex flex-col group gap-3  p-3 sm:p-4 md:p-6 rounded-2xl min-h-[250px] max-w-[500px] ">
            {/* <p className="font-medium "></p>
            <p className="text-zinc-400"></p>
            <div className="flex flex-wrap gap-1 pt-1 text-zinc-400 "></div> */}
          </div>
          <div className="row-span-2 flex flex-col gap-3 group bg-neutral-950 hover:bg-neutral-900  p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] relative ">
            <p className="font-medium ">Track Daily</p>
            <p className="text-zinc-400 pb-2 ">
              Lets you track you mood and wite you thoughts for that day through
              out the month, year, ....
              <br />
              Used firebase to provide Authentication and store data.
            </p>
            <img
              alt="web page img"
              src={pic1}
              className="h-40 lg:h-48 mx-auto filer grayscale-[25%] rounded-lg
             hover:scale-105 transition group-hover:grayscale-[0%] duration-200  "
            />
            <div className="flex flex-wrap gap-1 pt-2 text-zinc-400 ">
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Next.js
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Tailwind CSS
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Firestore Database
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Firebase Authentication
              </span>
            </div>
            <div className="flex gap-3 ">
              <a
                href="https://ashwin065-track-daily.netlify.app/"
                className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 "
              >
                <IoIosLink size={18} />
                Track-daily
              </a>
              <a
                href="https://github.com/AshwinSomi/track_daily-next-app"
                className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 "
              >
                <IoIosLink size={18} />
                GitHub
              </a>
            </div>
          </div>
          <div className=" row-span-1 flex flex-col group gap-3 bg-neutral-950 hover:bg-neutral-900 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">Quiz App</p>
            <p className="text-zinc-400">
              Lets you take a quiz of set of random 10 questions, that are
              fetched from Open Trivia Database API.
            </p>
            <div className="flex flex-wrap gap-1 pt-1 text-zinc-400 ">
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                React.js
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                CSS
              </span>
            </div>
            <a
              href="https://github.com/AshwinSomi/React_quizApplication_1/tree/main/quiz_app_1"
              className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 "
            >
              <IoIosLink size={18} />
              GitHub
            </a>
          </div>
          <div className="row-span-1 flex flex-col group gap-3 bg-neutral-950 hover:bg-neutral-900 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">News Analyzer</p>
            <p className="text-zinc-400">
              lets you analyze positivity and negativity of published new of a
              specific new publisher.
              <br />
              Used Beautifulsoup to scrap news and CSV to store data.
            </p>
            <div className="flex flex-wrap gap-1 pt-1 text-zinc-400 ">
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Python3
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Pandas
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Vader-sentiment-analyser
              </span>
            </div>
            <a
              href="https://github.com/AshwinSomi/News-Analyzer"
              className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 "
            >
              <IoIosLink size={18} />
              GitHub
            </a>
          </div>
          <div className="row-span-1 flex flex-col group gap-3 bg-neutral-950 hover:bg-neutral-900 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">Data Warehouse</p>
            <p className="text-zinc-400">
              Created a data warehouse using dimensional modelling techniques on
              a dataset with over 600 records collected from kaggle.
              <br />
              The dimensional database had 3 dimensions and 1 fact table.
            </p>
            <div className="flex flex-wrap pt-1 gap-1 text-zinc-400 ">
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Microsoft access
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Excel
              </span>
            </div>
            {/* <a className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 ">
              <IoIosLink size={18} />
              GitHub
            </a> */}
          </div>
          <div className="row-span-1 flex flex-col group gap-3 bg-neutral-950 hover:bg-neutral-900 p-3 sm:p-4 md:p-6 rounded-2xl duration-200 max-w-[500px] ">
            <p className="font-medium ">Path Visualizer</p>
            <p className="text-zinc-400">
              A path visualizer game that uses A* path finding algorithm to find
              shortest route.
              <br />
              Used Pygame to create dashboard for the game.
            </p>
            <div className="flex flex-wrap pt-1 gap-1 text-zinc-400 ">
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Python3
              </span>
              <span className="bg-neutral-900 group-hover:bg-neutral-950 px-2 py-1 group-hover:text-zinc-200 rounded-xl group-hover:shadow ">
                Pygame
              </span>
            </div>
            {/* <a className="group-hover:text-teal-400 font-medium pt-4 flex flex-row gap-1 ">
              <IoIosLink size={18} />
              GitHub
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
