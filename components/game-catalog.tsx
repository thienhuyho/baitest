"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import GameImage from "@/public/images/Bitmap.png";
import GameImage1 from "@/public/images/Bitmap1.png";
import GameImage2 from "@/public/images/Bitmap2.png";
import GameImage3 from "@/public/images/Bitmap3.png";
import GameImage4 from "@/public/images/Bitmap4.png";
import GameImage5 from "@/public/images/Bitmap5.png";
import GameImage6 from "@/public/images/Bitmap6.png";
import GameImage7 from "@/public/images/Bitmap7.png";
import GameImage8 from "@/public/images/Bitmap8.png";
import GameImage9 from "@/public/images/Bitmap9.png";
import GameImage10 from "@/public/images/Bitmap10.png";
import GameImage11 from "@/public/images/Bitmap11.png";
import { useClientTranslation } from "@/app/i18n/client";

interface Game {
  title: string;
  description: string;
  image: any;
}

interface GameCatalogProps {
  lng: string;
}

export default function GameCatalog({ lng }: GameCatalogProps) {
  const { t } = useClientTranslation(lng);

  const games: Game[] = [
    {
      title: "E-Space",
      description: t("game_espace_description"),
      image: GameImage,
    },
    {
      title: "Kingland",
      description: t("game_kingland_description"),
      image: GameImage1,
    },
    {
      title: "The Last Game",
      description: t("game_lastgame_description"),
      image: GameImage2,
    },
    {
      title: "G-Dragon",
      description: t("game_gdragon_description"),
      image: GameImage3,
    },
    {
      title: "Pirates",
      description: t("game_pirates_description"),
      image: GameImage4,
    },
    {
      title: "Witch Party",
      description: t("game_witchparty_description"),
      image: GameImage5,
    },
    {
      title: "Rocky",
      description: t("game_rocky_description"),
      image: GameImage6,
    },
    {
      title: "Blue Fire",
      description: t("game_bluefire_description"),
      image: GameImage7,
    },
    {
      title: "Magic Tree",
      description: t("game_magictree_description"),
      image: GameImage8,
    },
    {
      title: "Aborigines",
      description: t("game_aborigines_description"),
      image: GameImage9,
    },
    {
      title: "Cinderella",
      description: t("game_cinderella_description"),
      image: GameImage10,
    },
    {
      title: "Egypt Game",
      description: t("game_egyptgame_description"),
      image: GameImage11,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("ourGamesTitle")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("ourGamesDescription")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <Card
            key={index}
            className={`group overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105
              ${index % 2 === 1 ? "xl:mt-24 sm:mt-24 " : ""} 
              ${index % 2 === 0 ? "xl:mb-24 sm:mb-24" : ""} 
          
            `}
          >
            <div className="relative aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-3">
                  {game.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
