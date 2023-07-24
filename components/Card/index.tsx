import React, { ReactNode } from "react";
import clsx from "clsx";
import { Grid, Spacer, Stack, Divider, Container } from "..";
import { CardProps } from "../ComponentTypes";

function Label({
  children,
  actions,
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
        { [cardLarge]: size === "lg" }
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
          <Grid dimX={2} dimY={2} padding='component'>
            {children}
          </Grid>
          {actions && <Divider size={"sm"} dir='x' />}
          <Stack dir='x' gap='item'>
            {actions}
          </Stack>
          <Spacer dir='x' margin='item' />
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
