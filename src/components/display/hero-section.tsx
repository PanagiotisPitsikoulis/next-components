import React from "react";
import Link from "next/link";

interface Feature {
  title: string;
  description: string;
  svgPath: string; // SVG path string
}

interface HeroSectionProps {
  stars: number;
  features: Feature[];
}

const FeatureComponent: React.FC<Feature> = ({
  title,
  description,
  svgPath,
}) => (
  <div className="relative p-2 overflow-hidden border rounded-lg bg-background">
    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
        <path d={svgPath} />
      </svg>
      <div className="space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ stars, features }) => (
  <div>
    <section
      id="features"
      className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureComponent
            key={index}
            title={feature.title}
            description={feature.description}
            svgPath={feature.svgPath}
          />
        ))}
      </div>
    </section>
  </div>
);

export default HeroSection;
