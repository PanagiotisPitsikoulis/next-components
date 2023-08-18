import React from "react";
import { cn } from "../utils/utils";
import Link from "next/link";
import { buttonVariants } from "../default/ui/button";
import TextBox from "./textbox";

interface HeroProps {
  twitterText: string;
  twitterLink: string;
  headingText: string;
  paragraphText: string;
  getStartedText: string;
  githubText: string;
  githubLink: string;
}

export default function Hero({
  twitterText,
  twitterLink,
  headingText,
  paragraphText,
  getStartedText,
  githubText,
  githubLink,
}: HeroProps) {
  return (
    <section className="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          href={twitterLink}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          {twitterText}
        </Link>
        <TextBox headingText={headingText} paragraphText={paragraphText} />
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            {getStartedText}
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {githubText}
          </Link>
        </div>
      </div>
    </section>
  );
}
