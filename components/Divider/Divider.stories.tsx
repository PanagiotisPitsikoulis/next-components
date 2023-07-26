import Divider from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Low Level/UI/Divider",
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    dir: "y",
    size: "md",
  },
  render: ({ dir, size }) => (
    <div className='w-96 h-96 flex justify-center items-center'>
      <Divider dir={dir} size={size}></Divider>
    </div>
  ),
};
