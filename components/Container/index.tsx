import clsx from "clsx";
import React, { ReactNode } from "react";

const Container = ({
  children,
  padding,
  borderVisible = true,
  center,
  className,
}: ContainerProps) => {
  return (
    <div className={className}>
      <div
        className={clsx(
          { border: borderVisible },
          "rounded-outer rounded-t-[0.46rem]",
          "border-base-300",
          { "flex justify-center items-center": center }
        )}
      >
        <div
          className={clsx(
            { "px-component py-item": padding === "component" },
            { "p-page": padding === "page" },
            { "p-item": padding === "item" }
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
