import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { PricingFeatures } from "./components/PricingFeatures";
import { Title } from "./components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Title />
      <Description />
      <Pricing />
      <PricingFeatures />
    </div>
  );
}
