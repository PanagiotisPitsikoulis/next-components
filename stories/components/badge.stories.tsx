import { Badge } from "../../src";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge",
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Secondary: Story = {
  args: { variant: "secondary" },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ variant }) => (
    <Badge variant={variant}>
      <span>Badge</span>
    </Badge>
  ),
};

export const Destructive: Story = {
  args: { variant: "destructive" },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ variant }) => (
    <Badge variant={variant}>
      <span>Badge</span>
    </Badge>
  ),
};

export const Outline: Story = {
  args: { variant: "outline" },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ variant }) => (
    <Badge variant={variant}>
      <span>Badge</span>
    </Badge>
  ),
};
