import React, { useEffect, useState } from "react";

import { Link } from "@tanstack/react-router";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate relative position (0 to 1) within the window
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pt-10">
      <div className="py-10 px-2  sm:px-12 md:px-24">
        <div className="flex flex-col gap-6 items-center ">
          <p>
            This is LandingPage
            <br />I am still working on this page.. <br />
            Please check out my portfolio on Home
          </p>
          <div
            className="bg-zinc-800 p-3 rounded-xl border border-zinc-500 border-opacity-20
          hover:border-opacity-50 font-medium active:bg-opacity-50 active:border-opacity-20 duration-200 shadow "
          >
            <Link to="/home">Go to Portfolio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
