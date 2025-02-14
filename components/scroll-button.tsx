"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ScrollButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
    onClick={handleClick}
    className="fixed bottom-16 right-4 p-3 bg-white rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.4)] 
    transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 
    sm:bottom-24 sm:right-6 z-100"
    aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
  >
    {isAtTop ? (
      <ChevronDown className="w-6 h-6 text-black" />
    ) : (
      <ChevronUp className="w-6 h-6 text-black" />
    )}
  </button>
  );
};

export default ScrollButton;
