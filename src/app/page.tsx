import Banner from "@/components/modules/banner/Banner";
import BespokeSection from "@/components/modules/banner/BespokeSection";
import ConnectSection from "@/components/modules/connect/ConnectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polo Belt - Bespoke Argentine Style Polo Belts",
  description: "Polo Belt Homepage - Discover our bespoke Argentine style polo belts, crafted with premium materials and intricate designs. Explore our collection and learn about our ordering process.",
};

export default function Home() {
  return (
    <>
      <Banner />
      <BespokeSection />
      <ConnectSection/>
    </>
  );
}
