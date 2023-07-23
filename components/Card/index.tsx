import React, { ReactNode } from "react";
import clsx from "clsx";
import { Grid, Spacer, Stack, Divider, Container } from "..";
import { CardProps } from "../ComponentTypes";

function Label({ children, actions }: CardProps) {
  return (
    <div className={clsx("text-xs text-muted")}>
      <Container>
        <Stack dir='y' gap='item'>
          <div className='bg-base-200 w-full h-36 rounded-t-inner aspect-video'></div>
          <Grid dimX={2} dimY={2} padding='component'>
            {children}
          </Grid>
          {actions && <Divider dir='x' />}
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
