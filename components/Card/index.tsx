import React, { ReactNode } from "react";
import clsx from "clsx";
import { TextBox, Spacer, Stack, Divider, Container } from "..";
import { CardProps } from "../ComponentTypes";

function Card({
  children,
  size,
  imageVisible = true,
  borderVisible = true,
  orientation = "y",
}: CardProps) {
  const cardSmall = clsx("w-[10rem]");
  const cardMedium = clsx("w-md");
  const cardLarge = clsx("w-lg");

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
                { "aspect-square": orientation === "y" },
                { "aspect-video": orientation === "x" },
                { "rounded-t-inner": borderVisible },
                { "rounded-inner": !borderVisible }
              )}
            ></div>
          )}
          {!imageVisible && <Spacer dir='x' margin='item' />}
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
