import React, { ReactNode } from "react";
import clsx from "clsx";
import { Label } from "..";
import { ButtonProps } from "../ComponentTypes";

function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <>
      {variant === "primary" && (
        <button className='ease-in-out hover:bg-base-200 rounded-outer transition:all'>
          <Label>{children}</Label>
        </button>
      )}
      {variant === "secondary" && (
        <button className='ease-in-out hover:bg-base-200 rounded-outer transition:all'>
          <Label>{children}</Label>
        </button>
      )}
      {variant === "tertiary" && (
        <button className='ease-in-out hover:bg-base-200 rounded-outer transition:all'>
          <Label>{children}</Label>
        </button>
      )}
    </>
  );
}

export default Button;
