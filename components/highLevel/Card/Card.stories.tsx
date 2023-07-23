import Card from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
  render: ({}) => (
    <Card>
      <p>Hello World</p>
    </Card>
  ),
};
