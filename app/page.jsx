"use client";

import Menu from "./components/molecules/Menu";
import LoadingScreen from "./components/atoms/LoadingScreen";
import HeroSection from "./components/organisms/HeroSection";
import GooeyNav from "./components/molecules/GooeyNav";
import LightRays from "./components/molecules/LightRay";

const menuItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Works",
    href: "#works",
  },
];

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="relative min-h-screen bg-linear-to-b from-black to-[#006154] font-sans">
        <div className="absolute top-0 left-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <Menu />
        <main className="overflow-x-hidden relative">
          <HeroSection />
        </main>
      </div>
    </>
  );
}
