import { Link, useRouter } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";

const gradientUnderLine = "font-sm hover:text-teal-400 duration-200 p-1";

export default function Navbar() {
  const router = useRouter();
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition < lastScrollPosition) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  return (
    <div className={"fixed transition  duration-300 p-6 "}>
      <div className="ring-1 flex flex-col ring-zinc-400 ring-opacity-20 bg-neutral-900/60 hover:ring-opacity-20 shadow-lg hover:shadow-zinc-600/20 hover:scale-100 transition duration-200 text-zinc-300 p-1 rounded-xl ">
        <button
          onClick={() => {
            router.navigate({ to: "/home" });
          }}
          className={gradientUnderLine}
        >
          Home
        </button>
        <Link to="" className={gradientUnderLine}>
          projects
        </Link>
      </div>
    </div>
  );
}
