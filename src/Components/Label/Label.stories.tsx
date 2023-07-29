import Label from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Low level/UI/Label",
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { divider: true, borderVisible: true },
  render: ({ divider, borderVisible }) => (
    <Label divider={divider} borderVisible={borderVisible}>
      <p>👋🏻</p>
      <p>Hello world!</p>
    </Label>
  ),
};

export const NoDivider: Story = {
  args: { divider: false, borderVisible: true },
  render: ({ divider, borderVisible }) => (
    <Label divider={divider} borderVisible={borderVisible}>
      <p>👋🏻</p>
      <p>Hello world!</p>
    </Label>
  ),
};

export const NoBorder: Story = {
  args: { divider: true, borderVisible: false },
  render: ({ divider, borderVisible }) => (
    <Label divider={divider} borderVisible={borderVisible}>
      <p>👋🏻</p>
      <p>Hello world!</p>
    </Label>
  ),
};
