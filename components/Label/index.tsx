import React, { ReactNode } from "react";
import clsx from "clsx";
import { Container, Stack, Divider } from "..";
import { LabelProps } from "../ComponentTypes";

function Label({ children, divider, borderVisible }: LabelProps) {
  return (
    <div className={clsx("text-sm select-none group")}>
      <Container padding='item' borderVisible={borderVisible}>
        <Stack gap='item' dir='x'>
          <div className={clsx("text-normal", {})}>{children[0]}</div>
          {divider && <Divider margin='item' size={"sm"} dir='y' />}
          {children[1]}
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
