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
    orientation: "y",
  },
  render: ({ size, imageVisible, borderVisible, orientation }) => (
    <Card
      size={size}
      imageVisible={imageVisible}
      borderVisible={borderVisible}
      orientation={orientation}
    >
      <p>Card title</p>
      <p>This is a card description</p>
    </Card>
  ),
};
