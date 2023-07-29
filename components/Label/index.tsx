import React, { ReactNode } from "react";
import clsx from "clsx";
import { Container, Stack, Divider } from "..";

function Label({ children, divider, borderVisible, className }: LabelProps) {
  return (
    <div className={className}>
      <div className={clsx("text-md select-none group")}>
        <Container padding='component' borderVisible={borderVisible}>
          <Stack gap='item' dir='x' center={true}>
            <div className={clsx("text-normal", {})}>{children[0]}</div>
            {divider && <Divider margin='item' size={"sm"} dir='y' />}
            <p>{children[1]}</p>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default Label;
