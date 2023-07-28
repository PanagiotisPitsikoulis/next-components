import React, { ReactNode } from "react";
import clsx from "clsx";
import { Container, Stack, Divider } from "..";

function Label({ children, divider, borderVisible }: LabelProps) {
  return (
    <div className={clsx("text-md select-none group")}>
      <Container padding='component' borderVisible={borderVisible}>
        <Stack gap='item' dir='x' center={true}>
          <div className={clsx("text-normal", {})}>{children[0]}</div>
          {divider && <Divider margin='item' size={"sm"} dir='y' />}
          {children[1]}
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
