import React, { ReactNode } from "react";
import classNames from "classnames";

type StackProps = {
  children: ReactNode;
  dir?: "x" | "y";
  gap?: "page" | "component" | "item";
  justify?: "between" | "around" | "center";
};

function Stack({
  children,
  dir = "x",
  gap = "component",
  justify,
}: StackProps) {
  return (
    <div
      className={classNames(
        "flex",
        "items-center",
        { "justify-between": justify === "between" },
        { "justify-around": justify === "around" },
        { "justify-center": justify === "center" },
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
