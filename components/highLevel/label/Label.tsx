import React, { ReactNode } from "react";
import classNames from "classnames";
import Container from "@/components/lowLevel/ui/Container";
import Stack from "@/components/lowLevel/layout/Stack";
import Divider from "@/components/lowLevel/ui/Divider";

type LabelProps = {
  children: ReactNode;
  icon?: ReactNode;
};

function Label({ children, icon }: LabelProps) {
  return (
    <div className={classNames("text-xs")}>
      <Container padding='item'>
        <Stack gap='item'>
          {icon && <div className={classNames("text-primary")}>{icon}</div>}
          {icon && <Divider dir='y' margin='item' />}
          <div className={classNames("text-muted")}>{children}</div>
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
