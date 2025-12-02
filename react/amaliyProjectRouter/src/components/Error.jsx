import React, { useEffect } from "react";

export default function Spotlight404() {
  useEffect(() => {
    const overlay = document.getElementById("overlay");

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const pos = `${x}px ${y}px`;

      const mask = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`;
      overlay.style.maskImage = mask;
      overlay.style.webkitMaskImage = mask;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
        >
          Go Home
        </a>
      </div>

      {/* Dark overlay */}
      <div
        id="overlay"
        className="absolute inset-0 bg-black z-20 pointer-events-none overlay-dark"
      ></div>
    </div>
  );
}
