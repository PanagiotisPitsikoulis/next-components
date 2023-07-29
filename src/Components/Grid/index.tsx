import clsx from "clsx";
import React, { ReactNode } from "react";

type GridProps = {
  className?: string;
  children: ReactNode;
  columns: number;
  rows: number;
};

function Grid({ children, className }: GridProps) {
  return (
    <>
      <div className={clsx({ className })}>{children}</div>
    </>
  );
}

export default Grid;
