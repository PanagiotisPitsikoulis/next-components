import React, { ReactNode } from "react";
import classNames from "classnames";

type StackProps = {
  children: ReactNode;
  dir?: "x" | "y";
  gap?: "page" | "component" | "item";
};

function Stack({ children, dir = "x", gap = "component" }: StackProps) {
  return (
    <div
      className={classNames(
        "flex",
        { "flex-row": dir === "x" },
        { "flex-col": dir === "y" },
        { "gap-page": gap === "page" },
        { "gap-component": gap === "component" },
        { "gap-item": gap === "item" }
      )}
    >
      {children}
    </div>
  );
}

export default Stack;
