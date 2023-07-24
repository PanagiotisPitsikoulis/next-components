import clsx from "clsx";
import React, { ReactNode } from "react";
import { ContainerProps } from "../ComponentTypes";

const Container = ({
  children,
  padding,
  borderVisible = true,
  center,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        { border: borderVisible },
        "rounded-outer",
        "border-base-300",
        { "flex justify-center items-center": center }
      )}
    >
      <div
        className={clsx(
          { "p-component": padding === "component" },
          { "p-page": padding === "page" },
          { "p-item": padding === "item" }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
