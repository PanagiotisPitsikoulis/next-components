import Label from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    icon: <div>👋🏻</div>,
  },
  render: ({ icon }) => (
    <Label icon={icon}>
      <div>Hello world</div>
    </Label>
  ),
};
