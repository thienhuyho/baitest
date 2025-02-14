import { useTranslation } from "@/app/i18n";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
import GameCatalog from "@/components/game-catalog";
import PartnersCarousel from "@/components/partners-carousel";
import ScrollButton from "@/components/scroll-button";

interface HomePageProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params: { lng } }: HomePageProps) {
  const { t } = await useTranslation(lng);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-1">
        <Hero lng={lng} />
        <About lng={lng} />
        <GameCatalog lng={lng} />
        <PartnersCarousel lng={lng} />
        <Footer lng={lng} /> 
        <ScrollButton />

      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ lng: "en" }, { lng: "vi" }];
}
