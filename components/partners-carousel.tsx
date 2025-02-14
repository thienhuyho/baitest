"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Rectangle57 from "@/public/images/Rectangle 57.png";
import Rectangle58 from "@/public/images/Rectangle 58.png";
import Rectangle59 from "@/public/images/Rectangle 59.png";
import Rectangle60 from "@/public/images/Rectangle 60.png";
import Rectangle61 from "@/public/images/Rectangle 61.png";
import Rectangle62 from "@/public/images/Rectangle 62.png";
import { useClientTranslation } from "@/app/i18n/client";

interface PartnersCarouselProps {
  lng: string;
}

export default function PartnersCarousel({ lng }: PartnersCarouselProps) {
  const { t } = useClientTranslation(lng);

  const partners = [
    {
      name: "EA Games",
      logo: Rectangle57,
    },
    {
      name: "GAME",
      logo: Rectangle58,
    },
    {
      name: "First Power Up",
      logo: Rectangle59,
    },
    {
      name: "Walt Disney",
      logo: Rectangle60,
    },
    {
      name: "Book Pro Game Show",
      logo: Rectangle61,
    },
    {
      name: "Book Pro Game Show",
      logo: Rectangle62,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t("ourPartnersTitle")}
        </h1>
        <div className="relative w-full max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <Card className="p-4 flex items-center justify-center h-32 border-none shadow-none">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute  md:left-0 left-10 sx:left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 border border-gray-200 shadow-lg" />
            <CarouselNext className="absolute md:right-0 right-10 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white hover:bg-gray-100 border border-gray-200 shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
