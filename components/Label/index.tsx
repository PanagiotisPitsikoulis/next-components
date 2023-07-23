import React, { ReactNode } from "react";
import clsx from "clsx";
import { Container, Stack, Divider } from "..";
import { LabelProps } from "../ComponentTypes";

function Label({ children }: LabelProps) {
  return (
    <div className={clsx("text-xs select-none group")}>
      <Container padding='item'>
        <Stack gap='item'>
          <div className={clsx("text-normal", {})}>{children[0]}</div>
          <Divider dir='y' margin='item' />
          <div className={clsx("text-muted", {})}>{children[1]}</div>
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
