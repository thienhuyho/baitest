"use client";

import * as React from "react";
import { Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogoVN from "@/public/logos/vietnam.png";
import LogoEN from "@/public/logos/united-states.png";
import { useRouter, usePathname } from "next/navigation";
import { useClientTranslation } from "@/app/i18n/client";

const languageOptions = [
  {
    name: "Vietnamese",
    code: "vi",
    flag: LogoVN,
  },
  {
    name: "English",
    code: "en",
    flag: LogoEN,
  },
];

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Lấy ngôn ngữ hiện tại từ pathname
  const getCurrentLanguage = () => {
    const pathSegments = pathname.split("/");
    const currentLangCode = pathSegments[1];
    return (
      languageOptions.find((lang) => lang.code === currentLangCode) ||
      languageOptions[1]
    );
  };

  const currentLang = getCurrentLanguage();
  const { i18n } = useClientTranslation(currentLang.code);

  const handleLanguageChange = (language: (typeof languageOptions)[0]) => {
    const currentPath = pathname;
    const pathSegments = currentPath.split("/");
    pathSegments[1] = language.code;
    const newPath = pathSegments.join("/");

    router.push(newPath);
    router.refresh();
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="w-[70px] justify-start gap-2">
          <Image
            src={currentLang.flag}
            alt={currentLang.name}
            width={24}
            height={16}
            className="rounded"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        <div className="grid gap-2">
          {languageOptions.map((language) => (
            <Button
              key={language.code}
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => handleLanguageChange(language)}
            >
              <Image
                src={language.flag}
                alt={language.name}
                width={24}
                height={16}
                className="rounded"
              />
              <span>{language.name}</span>
              {currentLang.code === language.code && (
                <Check className="ml-auto h-4 w-4" />
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
