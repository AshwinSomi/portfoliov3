import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const gradientUnderLine =
  "font-medium hover:text-[#1ddbb5] [&.active]:text-[#1ddbb5] [&.active]:relative duration-200 pt-1.5 pb-2.5 [&.active]:after:absolute [&.active]:after:bottom-0 [&.active]:after:left-0 [&.active]:after:w-full [&.active]:after:h-[0.5px] [&.active]:after:bg-gradient-to-r [&.active]:after:from-transparent [&.active]:after:via-[#1ddbb5]/50 [&.active]:after:to-transparent ";

export const Route = createRootRoute({
  component: () => (
    <div className="font-normal bg-black antialiased mx-auto ">
      <div
        className="min-h-screen bg-zinc-900 text-zinc-200 mx-auto max-w-[1250px] 
        ring-1 ring-zinc-400 ring-opacity-25 shadow-xl text-sm 
        flex flex-col "
      >
        <div className="flex flex-row justify-center content-center p-6 ">
          <div className="ring-1 ring-zinc-500 ring-opacity-25 hover:ring-opacity-40 bg-opacity-90 hover:bg-opacity-100 bg-zinc-800 p-1 px-6 rounded-full flex gap-6 ">
            <Link
              to="/"
              // className="font-medium hover:text-[#1ddbb5] [&.active]:border-b [&.active]:text-[#1ddbb5] [&.active]:border-current duration-200 pt-1.5 pb-2 "
              className={gradientUnderLine}
            >
              LandingPage
            </Link>{" "}
            <Link
              to="/home"
              className={gradientUnderLine}
              // className="font-medium hover:text-[#1ddbb5] [&.active]:border-b [&.active]:text-[#1ddbb5] [&.active]:border-current duration-200 pt-1.5 pb-2 "
            >
              Home
            </Link>
            {/* <a
              href="https://ashwin065-portfolio.netlify.app/"
              // className={gradientUnderLine}
              target="blank"
              className="font-medium hover:text-[#1ddbb5] duration-200 pt-1.5 pb-2 flex flex-row justify-center items-center gap-1 "
            >
              OldPortfolio
              <FaExternalLinkAlt size={10} />
            </a> */}
            <a
              href="https://github.com/AshwinSomi"
              // className={gradientUnderLine}
              target="blank"
              className="font-medium hover:text-[#1ddbb5] duration-200 pt-1.5 pb-2 flex flex-row justify-center items-center gap-1 "
            >
              GitHub
              <FaExternalLinkAlt size={10} />
            </a>
          </div>
        </div>
        <div className="flex-grow ">
          <Outlet />
        </div>
        <div className="pt-8  ">
          <Footer />
        </div>
        {/* <TanStackRouterDevtools /> */}
      </div>
    </div>
  ),
});
