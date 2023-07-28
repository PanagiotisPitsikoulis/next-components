import React, { ReactNode } from "react";
import clsx from "clsx";
import { Label } from "..";

function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <div>
      {variant === "primary" && (
        <button className='rounded-inner transition:all bg-base-200 hover:bg-base-200/70 ease-in-out'>
          <Label borderVisible={true} divider={true}>
            {children}
          </Label>
        </button>
      )}
      {variant === "secondary" && (
        <button className='rounded-inner transition:all bg-base-100 hover:bg-base-100/70 ease-in-out'>
          <Label borderVisible={false} divider={false}>
            {children}
          </Label>
        </button>
      )}
      {variant === "tertiary" && (
        <button className='rounded-inner transition:all bg-base-200 hover:bg-base-100/30 text-muted hover:text-normal ease-in-out'>
          <Label borderVisible={false} divider={false}>
            {children}
          </Label>
        </button>
      )}
    </div>
  );
}

export default Button;
