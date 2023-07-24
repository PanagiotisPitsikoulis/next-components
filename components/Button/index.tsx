import React, { ReactNode } from "react";
import clsx from "clsx";
import { Label } from "..";
import { ButtonProps } from "../ComponentTypes";

function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <>
      {variant === "primary" && (
        <button className='ease-in-out hover:bg-base-200/70 bg-base-200 rounded-outer transition:all'>
          <Label borderVisible={true} divider={true}>
            {children}
          </Label>
        </button>
      )}
      {variant === "secondary" && (
        <button className='ease-in-out hover:bg-base-200/70 rounded-outer transition:all'>
          <Label borderVisible={true} divider={true}>
            {children}
          </Label>
        </button>
      )}
      {variant === "tertiary" && (
        <button className='ease-in-out hover:bg-base-200 rounded-outer transition:all'>
          <Label borderVisible={false} divider={false}>
            {children}
          </Label>
        </button>
      )}
    </>
  );
}

export default Button;
