import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Utilities } from "@/components/sections/utilities";
import { InferGetServerSidePropsType } from "next";

export default async function Home() {

  return (
    <div className="flex flex-col">
      <Hero/>
      <Utilities/>
      <Pricing/>
    </div>
  );
}