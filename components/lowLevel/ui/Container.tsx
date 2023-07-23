import classNames from "classnames";
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  padding?: "component" | "page" | "item";
};

const Container = ({ children, padding }: ContainerProps) => {
  return (
    <div className={classNames("border", "rounded-outer", "border-base-300")}>
      <div
        className={classNames(
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
