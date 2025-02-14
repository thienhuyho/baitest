"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import BG from "@/public/images/BG.png";
import BGMobile from "@/public/images/BG-mobile.png";
import Fairy from "@/public/images/Fairy.png";
import FairyMobile from "@/public/images/Fairy-mobile.png";
import Header from "./navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useClientTranslation } from "@/app/i18n/client";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroProps {
  lng: string;
}

export default function Hero({ lng }: HeroProps) {
  const isMobile = useIsMobile();
  const { t } = useClientTranslation(lng);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 30,
    hours: 18,
    minutes: 20,
    seconds: 11,
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div
      className={`relative overflow-hidden h-[800] ${
        isMobile ? "pb-[300px]" : ""
      }`}
      style={{
        backgroundImage: `url(${isMobile ? BGMobile.src : BG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header lng={lng} />
      <img
        src={isMobile ? FairyMobile.src : Fairy.src}
        alt="Fairy"
        className="absolute bottom-0 left-0 w-[600px] h-auto z-10"
      />
      {/* Floating shapes */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIi8+PC9zdmc+')] opacity-20"></div>
      </div> */}

      {/* Moon */}
      {/* <div className="absolute right-1/4 top-20 h-32 w-32 rounded-full bg-white/80 blur-xl"></div> */}

      <div className="relative mx-auto max-w-6xl px-4 pb-12 md:pt-28 pt-10 text-center">
        <p className="md:text-8xl sm:text-6xl text-4xl font-playfair font-extrabold tracking-[0.6px] text-center text-white/90">
          {t("gettingReady")}
        </p>

        {/* Countdown Timer */}
        <div className="my-12 inline-flex gap-4 rounded-xl bg-white p-6 backdrop-blur-sm  m-auto justify-center">
          {Object.entries(timeLeft).map(([key, value], index) => (
            <div key={key} className="flex flex-col items-start px-4">
              <span className=" md:text-[90px] sm:text-[40px] text-[32px] font-extrabold text-gray-900 text-center leading-[64px] tracking-[4.8px]">
                {value}
                {index !== 3 && <span className="ml-10">:</span>}
              </span>
              <span className="md:text-[16px] text-[12px] md:ml-2 md:mt-2 text-gray-600 capitalize font-montserrat font-bold text-[15.64px] leading-[19.07px] tracking-[-0.65px] text-center">
                {t(key)}
              </span>
            </div>
          ))}
        </div>

        <p className="mb-8 text-lg text-white/90 max-w-full lg:mx-80 md:mx-60 mx-0">
          {t("comingSoonMessage")}
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto mb-12 max-w-md"
        >
          <Input
            type="email"
            placeholder={t("enterYourEmail")}
            className="h-12 pr-24 bg-white text-black border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute right-1 top-1 h-10 bg-white"
          >
            <ChevronRight className="h-4 w-4 text-black" />{" "}
            {/* Updated to use an icon */}
          </Button>
        </form>
      </div>
    </div>
  );
}
