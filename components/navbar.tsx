"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/public/logos/White_logo.png";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./language-selector";
import { useClientTranslation } from "@/app/i18n/client";

interface HeaderProps {
  lng: string;
}

export default function Header({ lng }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useClientTranslation(lng);

  return (
    <header>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="relative w-24 h-12">
            <Image
              src={Logo.src}
              alt="Fermy"
              fill
              className="object-contain"
              priority
            />
          </div>

          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen
                ? "translate-x-0 z-50"
                : "translate-x-full md:translate-x-0"
            }
            md:flex md:items-center md:space-x-8
          `}
          >
            <button
              className="md:hidden absolute top-6 right-6 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              <a
                href="#about"
                className="text-black uppercase md:text-white hover:text-primary transition-colors duration-300 font-montserrat font-bold text-[14px] leading-[17.5px] tracking-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("aboutUs")}
              </a>
              <a
                href="#features"
                className="text-black uppercase md:text-white hover:text-primary transition-colors duration-300 font-montserrat font-bold text-[14px] leading-[17.5px] tracking-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("games")}
              </a>
              <a
                href="#how-to-use"
                className="text-black uppercase md:text-white hover:text-primary transition-colors duration-300 font-montserrat font-bold text-[14px] leading-[17.5px] tracking-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("partners")}
              </a>
              <a
                href="#reviews"
                className="text-black uppercase md:text-white hover:text-primary transition-colors duration-300 font-montserrat font-bold text-[14px] leading-[17.5px] tracking-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contactUs")}
              </a>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <LanguageSelector />
              </div>
            </div>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6 " />
          </button>
        </div>
      </div>
    </header>
  );
}
