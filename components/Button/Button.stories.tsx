import Button from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: ({ variant }) => (
    <Button variant={variant}>
      <div>👉</div>
      <div>Click me!</div>
    </Button>
  ),
};

export const Primary: Story = {
  args: { variant: "primary" },
  render: ({ variant }) => (
    <Button variant={variant}>
      <div>👉</div>
      <div>Click me!</div>
    </Button>
  ),
};

export const Secondary: Story = {
  args: { variant: "secondary" },
  render: ({ variant }) => (
    <Button variant={variant}>
      <div>👉</div>
      <div>Click me!</div>
    </Button>
  ),
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
  render: ({ variant }) => (
    <Button variant={variant}>
      <div>👉</div>
      <div>Click me!</div>
    </Button>
  ),
};
