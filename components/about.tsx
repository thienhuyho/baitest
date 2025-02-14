"use client";

import { CalendarClock, Gamepad, Trophy } from "lucide-react";
import Illustrator from "@/public/images/Illustrator.png";
import PinMap from "@/public/images/Pin-map.png";
import "@/app/[lng]/globals.css";
import { useClientTranslation } from "@/app/i18n/client";

interface AboutProps {
  lng: string;
}

export default function About({ lng }: AboutProps) {
  const { t } = useClientTranslation(lng);

  return (
    <div className="container mx-auto md:px-24 px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-[30px]">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-[40px] md:text-[60px] font-bold text-black">
            {t("aboutUs")}
          </h1>

          <p className="text-[#757575]  text-[14px] leading-relaxed">
            {t("browseGamesMessage")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            <div className="space-y-2">
              <div className="text-[#079bee] text-[44px] md:text-[80px] font-bold">
                600<span className="text-4xl">M</span>+
              </div>
              <div className="text-black font-bold text-xl">{t("users")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#079bee] text-[44px] md:text-[80px] font-bold">
                135+
              </div>
              <div className="text-black font-bold text-xl">{t("games")}</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#eeeeee] max-w-[560px] md:px-16 px-8 md:pt-24 pt-8 pb-8 rounded-xl space-y-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#e3fcff] p-3 rounded-full">
                <CalendarClock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[24px] text-black">
                  24 - {t("hours")}
                </h3>
                <p className="text-[#757575] text-[14px]">{t("access24_7")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#e3fcff] p-3 rounded-full">
                <Gamepad className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[24px] text-black">
                  {t("design")}
                </h3>
                <p className="text-[#757575] text-[14px]">
                  {t("innovativeGameplay")}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#e3fcff] p-3 rounded-full">
                <Trophy className="w-6 h-6 " />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[24px] text-black">
                  {t("team")}
                </h3>
                <p className="text-[#757575] text-[14px]">{t("etechIntro")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto py-12 md:pt-[150px]  pt-[50px]">
        <img
          src={PinMap.src}
          alt="Pin Map"
          className="w-full h-auto"
          style={{ backgroundColor: "transparent" }}
        />
        <img
          src={Illustrator.src}
          alt="Illustrator"
          className="absolute md:top-20 top-10 md:left-[50%] left-[50%] transform -translate-x-1/2 h-auto md:w-[450px] w-[300px]  animate-circle"
        />
      </div>
    </div>
  );
}
