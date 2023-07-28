import ButtonGroup from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";
import { multiplyChild } from "../../utils/multiplyChild";
import ButtonIcon from "../Button/ButtonIcon";
import ButtonText from "../Button/ButtonText";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "High level/UI/ButtonGroup",
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {},
  render: ({}) => (
    <ButtonGroup>
      <Button variant='secondary'>
        <ButtonIcon>✌️</ButtonIcon>
        <ButtonText>Button</ButtonText>
      </Button>
      {multiplyChild(
        <Button variant='tertiary'>
          <p>✌️</p>
          <p>Button</p>
        </Button>,
        3
      )}
    </ButtonGroup>
  ),
};
