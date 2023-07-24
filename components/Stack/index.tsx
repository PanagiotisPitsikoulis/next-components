import React, { ReactNode } from "react";
import clsx from "clsx";
import { StackProps } from "../ComponentTypes";

function Stack({ children, dir = "x", gap = "component" }: StackProps) {
  return (
    <div
      className={clsx(
        "flex",
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
  );
}

export default Stack;
