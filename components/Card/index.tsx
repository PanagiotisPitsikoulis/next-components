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
  const cardSmall = clsx("h-sm w-md");
  const cardMedium = clsx("h-md w-lg");
  const cardLarge = clsx("h-lg w-[40rem]");

  return (
    <div
      className={clsx(
        { "text-xs": true },
        { "text-muted": true },
        { [cardSmall]: size === "sm" },
        { [cardMedium]: size === "md" },
        { [cardLarge]: size === "lg" },
        { "shrink-0": true }
      )}
    >
      <Container borderVisible={borderVisible}>
        <Stack dir='y' gap='item'>
          {imageVisible && (
            <div
              className={clsx(
                "bg-base-200",
                "w-full",
                "aspect-video",
                { "rounded-t-inner": borderVisible },
                { "rounded-inner": !borderVisible }
              )}
            ></div>
          )}
          <div className='px-component'>
            <TextBox>{children}</TextBox>
          </div>
          <Spacer dir='x' margin='item' />
        </Stack>
      </Container>
    </div>
  );
}

export default Card;
