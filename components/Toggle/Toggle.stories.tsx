import Toggle from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Low Level/UI/Toggle",
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { activeChild: 0, borderVisible: true },
  render: ({ activeChild, borderVisible }) => (
    <Toggle activeChild={activeChild} borderVisible={borderVisible}>
      <p>Hello</p>
      <p>World</p>
    </Toggle>
  ),
};
