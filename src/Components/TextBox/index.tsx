import clsx from "clsx";
import React, { ReactNode } from "react";

type TextBoxProps = {
  className?: string;
  children: [ReactNode, ReactNode];
  prominent: boolean;
};

function TextBox({ children, prominent = false, className }: TextBoxProps) {
  return (
    <div className={className}>
      <div>
        <div
          className={clsx(
            { "text-lg text-focus leading-none": prominent },
            { "text-sm text-normal leading-none": !prominent }
          )}
        >
          {children[0]}
        </div>
        <div
          className={clsx(
            { "text-sm text-muted leading-6": prominent },
            { "text-xs text-muted leading-4": !prominent }
          )}
        >
          {children[1]}
        </div>
      </div>
    </div>
  );
}

export default TextBox;
