import React from "react";
import Hero from "@/registry/composed/hero";
import HeroSection from "@/registry/composed/hero-section";
import { ActivitySquare, Baseline } from "lucide-react";
import TextBox from "@/registry/composed/textbox";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Hero
        getStartedText="Get Started Now"
        githubLink="https://github.com/yourusername"
        githubText="GitHub Repository"
        headingText="Welcome to My Website"
        paragraphText="Explore and learn amazing things on my website."
        twitterLink="https://twitter.com/yourusername"
        twitterText="Follow me on Twitter"
      />
      <HeroSection
        headingText="Welcome to My Website"
        paragraphText="Explore and learn amazing things on my website."
        features={[
          {
            description: "hello",
            svg: <ActivitySquare />,
            title: "This is kinda important",
          },
          {
            description: "text",
            svg: <Baseline />,
            title: "Imporant kinda",
          },
          {
            description: "hello",
            svg: <ActivitySquare />,
            title: "This is kinda important",
          },
          {
            description: "hello",
            svg: <ActivitySquare />,
            title: "This is kinda important",
          },
          {
            description: "text",
            svg: <Baseline />,
            title: "Imporant kinda",
          },
          {
            description: "hello",
            svg: <ActivitySquare />,
            title: "This is kinda important",
          },
        ]}
        stars={5}
      />
      <TextBox
        headingText="Fully opensource"
        paragraphText="Hello lorem bla bla bla"
      />
    </main>
  );
}
