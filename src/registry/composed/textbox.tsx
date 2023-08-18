import { cn } from "../utils/utils";

interface TextBoxProps {
  headingText?: string;
  paragraphText?: string;
  variant?: "prominent" | "subtle";
  center?: boolean;
}

export default function TextBox({
  headingText,
  paragraphText,
  variant = "prominent",
  center = true,
}: TextBoxProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        center && "text-center items-center justify-center"
      )}
    >
      <h1
        className={cn(
          "font-bold",
          variant === "prominent" &&
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
          variant === "subtle" && "text-2xl"
        )}
      >
        {headingText}
      </h1>
      <p
        className={cn(
          "text-muted-foreground font-semibold",
          variant === "prominent" && "leading-normal sm:text-xl sm:leading-8",
          variant === "subtle" && "text-lg"
        )}
      >
        {paragraphText}
      </p>
    </div>
  );
}
