import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <>
      <div className={classNames("")}>{children}</div>
    </>
  );
}

export default Button;
