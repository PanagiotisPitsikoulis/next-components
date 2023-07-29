import React, { ReactNode } from "react";
import clsx from "clsx";

function Stack({
  children,
  dir = "x",
  gap = "component",
  center = false,
  className,
}: StackProps) {
  return (
    <div className={className}>
      <div
        className={clsx(
          "flex",
          { "items-center": center },
          { "justify-between": gap === "full" },
          { "flex-row": dir === "x" },
          { "flex-col": dir === "y" },
          { "gap-page": gap === "page" },
          { "gap-component": gap === "component" },
          { "gap-item": gap === "item" },
          { "gap-0": gap === "none" }
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Stack;
