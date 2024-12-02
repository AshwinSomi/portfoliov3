import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const gradientUnderLine =
  "font-medium hover:text-teal-400 [&.active]:text-teal-400 [&.active]:relative duration-200 pt-1.5 pb-2.5 [&.active]:after:absolute [&.active]:after:bottom-0 [&.active]:after:left-0 [&.active]:after:w-full [&.active]:after:h-[0.5px] [&.active]:after:bg-gradient-to-r [&.active]:after:from-transparent [&.active]:after:via-teal-400/50 [&.active]:after:to-transparent ";

export const Route = createRootRoute({
  component: () => (
    <div className="font-normal bg-black antialiased mx-auto ">
      {/* ring-1 ring-zinc-400 ring-opacity-25 */}
      <div
        className="min-h-screen  text-zinc-200 mx-auto max-w-[1250px] 
        border border-x border-zinc-500 border-opacity-25 shadow-xl text-sm 
        flex flex-col "
      >
        <div className="flex flex-row justify-center content-center p-6 ">
          <div className="ring-1 ring-zinc-400 ring-opacity-20 bg-neutral-900/60 hover:ring-opacity-20 shadow-lg hover:shadow-zinc-600/20 hover:scale-100 transition duration-200 text-zinc-300 p-1 px-6 rounded-xl flex gap-6 ">
            <Link to="/" className={gradientUnderLine}>
              LandingPage
            </Link>{" "}
            <Link to="/home" className={gradientUnderLine}>
              Home
            </Link>
            <a
              href="https://github.com/AshwinSomi"
              // className={gradientUnderLine}
              target="blank"
              className="font-medium hover:text-teal-400 duration-200 pt-1.5 pb-2 flex flex-row justify-center items-center gap-1 "
            >
              GitHub
              <FaExternalLinkAlt size={10} />
            </a>
          </div>
        </div>
        <div className="flex-1 ">
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
