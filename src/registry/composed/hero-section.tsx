import React from "react";
import Link from "next/link";
import TextBox from "./textbox";

interface Feature {
  title: string;
  description: string;
  svg: React.ReactNode;
}

interface HeroSectionProps {
  stars: number;
  features: Feature[];
  headingText: string;
  paragraphText: string;
}

const FeatureComponent: React.FC<Feature> = ({ title, description, svg }) => (
  <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
        {svg}
      </svg>
      <div className="space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default function HeroSection({
  stars,
  features,
  headingText,
  paragraphText,
}: HeroSectionProps) {
  return (
    <div>
      <section
        id="features"
        className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24"
      >
        <TextBox headingText={headingText} paragraphText={paragraphText} />
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureComponent
              key={index}
              title={feature.title}
              description={feature.description}
              svg={feature.svg}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
