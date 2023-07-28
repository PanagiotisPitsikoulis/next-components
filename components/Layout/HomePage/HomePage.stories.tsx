import HomePage from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: "Layouts/HomePage",
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
  render: ({}) => (
    <HomePage>
      <div></div>
    </HomePage>
  ),
};
