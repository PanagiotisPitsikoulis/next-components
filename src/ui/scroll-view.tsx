import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib";

const ScrollViewStyles = cva("", {
  variants: {
    intent: {
      primary: [],
      secondary: [],
    },
    size: {},
  },
});

interface ScrollViewProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof ScrollViewStyles> {}

const ScrollView: React.FC<ScrollViewProps> = ({
  className,
  intent,
  size,
  children,
  ...props
}) => (
  <div className={ScrollViewStyles({ intent, size, className })} {...props}>
    <div className={cn("flex overflow-x-auto space-x-8 pb-2", className)}>
      {children}
    </div>
  </div>
);

const ScrollViewItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => <div className={cn("flex-shrink-0", className)} {...props} />;

export { ScrollView, ScrollViewItem };
