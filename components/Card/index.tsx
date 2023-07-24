import React, { ReactNode } from "react";
import clsx from "clsx";
import { TextBox, Spacer, Stack, Divider, Container } from "..";
import { CardProps } from "../ComponentTypes";

function Card({
  children,
  size,
  imageVisible = true,
  borderVisible = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        { "w-36": size === "sm" },
        { "w-48": size === "md" },
        "shrink-0"
      )}
    >
      <Container borderVisible={borderVisible}>
        <Stack dir='y' gap='item'>
          {imageVisible && (
            <div
              className={clsx(
                "bg-base-200",
                "w-full",
                { "h-36": size === "sm" },
                { "h-72": size === "md" },
                { "rounded-t-inner": borderVisible },
                { "rounded-inner": !borderVisible }
              )}
            ></div>
          )}
          {!imageVisible && <Spacer dir='x' margin='item' />}
          <div className='px-item'>
            <TextBox>{children}</TextBox>
          </div>
          <Spacer dir='x' margin='item' />
        </Stack>
      </Container>
    </div>
  );
}

export default Card;
