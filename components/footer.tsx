"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import BGFooter from "@/public/images/BGFooter.png";
import Logo from "@/public/logos/White_logo.png";
import { useClientTranslation } from "@/app/i18n/client";

interface FooterProps {
  lng: string;
}

export default function Footer({ lng }: FooterProps) {
  const { t } = useClientTranslation(lng);

  return (
    <footer className="relative  text-white pt-16 pb-32">
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BGFooter.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Social Links */}
          <div className="space-y-6 mx-auto">
            <div className="w-32">
              <Image
                src={Logo}
                alt="GTECH Logo"
                width={128}
                height={48}
                className="brightness-0 invert"
              />
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t("address")}</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p>
                    Valletta Buildings, South Street, Valletta - V.T 1103 Malta,
                    US
                  </p>
                  <p>
                    20 Phan Dang Luu street, Hai Chau District, Danang city,
                    Vietnam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4704 21.7893 20.9983 21.4142 21.3734C21.0391 21.7485 20.5112 21.9592 19.96 21.96C16.4289 21.6883 13.0264 20.5197 10.03 18.56C7.24019 16.7736 4.9307 14.4641 3.14424 11.6743C1.17805 8.66819 0.00906837 5.25498 -0.260002 1.71426C-0.26931 1.16473 -0.0600362 0.638498 0.313324 0.263895C0.686684 -0.110708 1.21175 -0.324119 1.76 -0.32426H4.76C5.75506 -0.337892 6.61455 0.349622 6.84 1.31426C7.03563 2.22181 7.31857 3.10931 7.68 3.96426C7.95763 4.63214 7.8495 5.39666 7.4 5.94426L6.12 7.22426C7.75959 10.1122 10.1079 12.4605 12.9958 14.1C14.2758 12.82 14.2758 12.82 15.1058 13.1C15.9607 13.4615 16.8482 13.7444 17.7558 13.94C18.7189 14.1667 19.4039 15.0244 19.3958 16.02L22 16.92Z"
                    fill="white"
                  />
                </svg>
                <span>(+1) 555-0108-000 or (+236) 555-0108</span>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t("subscribe")}</h3>
            <p className="text-gray-300">{t("subscribeNewsletter")}</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t("enterYourEmail")}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary" size="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute w-full bottom-0 py-6 text-center text-sm text-gray-400 bg-black">
        2017 Copyright. Policy.
      </div>
    </footer>
  );
}
