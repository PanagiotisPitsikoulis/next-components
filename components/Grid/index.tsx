import React, { ReactNode } from "react";
import clsx from "clsx";
import { GridProps } from "../ComponentTypes";

function Grid({
  children,
  dimX = 3,
  dimY = 3,
  gap = "component",
  padding,
}: GridProps) {
  return (
    <div
      className={clsx(
        "grid",
        "grid-cols-1",
        { [`md:grid-rows-${dimX}`]: true },
        { [`md:grid-cols-${dimY}`]: true },
        { [`gap-${gap}`]: true },
        { [`p-${padding}`]: true }
      )}
    >
      {children}
    </div>
  );
}

export default Grid;
