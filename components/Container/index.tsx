import clsx from "clsx";
import React, { ReactNode } from "react";
import { ContainerProps } from "../ComponentTypes";

const Container = ({
  children,
  padding,
  borderVisible = true,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        { border: borderVisible },
        "rounded-outer",
        "border-base-300"
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
