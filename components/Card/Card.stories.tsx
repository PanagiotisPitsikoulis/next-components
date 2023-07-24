import Card from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    size: "md",
    imageVisible: true,
    borderVisible: true,
  },
  render: ({ size, imageVisible, borderVisible }) => (
    <Card size={size} imageVisible={imageVisible} borderVisible={borderVisible}>
      <p>This is card component</p>
      <p>Card description</p>
    </Card>
  ),
};
