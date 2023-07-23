import React, { ReactNode } from "react";
import classNames from "classnames";
import Container from "@/components/lowLevel/ui/Container";
import Divider from "@/components/lowLevel/ui/Divider";
import Stack from "@/components/lowLevel/layout/Stack";
import Spacer from "@/components/lowLevel/ui/Spacer";
import Grid from "@/components/lowLevel/layout/Grid";

type CardProps = {
  children: ReactNode;
  actions?: ReactNode;
};

function Label({ children, actions }: CardProps) {
  return (
    <div className={classNames("text-xs text-muted")}>
      <Container>
        <Stack dir='y' gap='item'>
          <div className='bg-base-200 w-full h-36 rounded-t-inner aspect-video'></div>
          <Grid dimX={2} dimY={2} padding='component'>
            {children}
          </Grid>
          {actions && <Divider dir='x' />}
          <Stack dir='x' justify='around' gap='item'>
            {actions}
          </Stack>
          <Spacer dir='x' margin='item' />
        </Stack>
      </Container>
    </div>
  );
}

export default Label;
