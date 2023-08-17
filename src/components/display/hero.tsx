import { cn } from "../utils/utils";
import Link from "next/link";
import { buttonVariants } from "../input/button";

interface HeroProps {
  twitterText: string;
  twitterLink: string;
  headingText: string;
  paragraphText: string;
  getStartedText: string;
  githubText: string;
  githubLink: string;
}

export const Hero: React.FC<HeroProps> = ({
  twitterText,
  twitterLink,
  headingText,
  paragraphText,
  getStartedText,
  githubText,
  githubLink,
}) => {
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
        <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
          {headingText}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {paragraphText}
        </p>
        <div className="space-x-4">
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
};
