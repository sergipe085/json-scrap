import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { InferGetServerSidePropsType } from "next";

export default async function Home() {

  return (
    <>
      <Hero/>
      <Pricing/>
    </>
  );
}