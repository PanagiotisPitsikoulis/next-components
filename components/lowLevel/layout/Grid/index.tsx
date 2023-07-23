import React, { ReactNode } from "react";
import classNames from "classnames";

type GridProps = {
  children: ReactNode;
  dimX?: 1 | 2 | 3 | 4;
  dimY?: 1 | 2 | 3 | 4;
  gap?: "page" | "component" | "item";
  padding?: "component" | "page" | "item";
};

function Grid({
  children,
  dimX = 3,
  dimY = 3,
  gap = "component",
  padding,
}: GridProps) {
  return (
    <div
      className={classNames(
        { "md:grid-rows1": dimX === 1 },
        { "md:grid-rows-2": dimX === 2 },
        { "md:grid-rows-3": dimX === 3 },
        { "md:grid-rows-4": dimX === 4 },
        { "md:grid-cols-1": dimY === 1 },
        { "md:grid-cols-2": dimY === 2 },
        { "md:grid-cols-3": dimY === 3 },
        { "md:grid-cols-4": dimY === 4 },
        { "gap-page": gap === "page" },
        { "gap-component": gap === "component" },
        { "gap-item": gap === "item" },
        "grid",
        "grid-cols-1",
        { "p-component": padding === "component" },
        { "p-page": padding === "page" },
        { "p-item": padding === "item" }
      )}
    >
      {children}
    </div>
  );
}

export default Grid;
