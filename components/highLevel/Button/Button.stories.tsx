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
  render: ({}) => (
    <Button>
      <div></div>
    </Button>
  ),
};
