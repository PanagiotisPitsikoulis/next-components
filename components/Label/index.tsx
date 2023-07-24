import React, { ReactNode } from "react";
import clsx from "clsx";
import { Container, Stack, Divider } from "..";
import { LabelProps } from "../ComponentTypes";

function Label({ children, divider, borderVisible }: LabelProps) {
  return (
    <div className={clsx("text-xs select-none group")}>
      <Container padding='item' borderVisible={borderVisible}>
        <Stack gap='item' dir='x'>
          <div className={clsx("text-normal", {})}>{children[0]}</div>
          {divider && <Divider margin='item' size={"sm"} dir='y' />}
          <div className={clsx("text-muted", {})}>{children[1]}</div>
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
