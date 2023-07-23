import Divider from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    dir: "y",
  },
  render: ({ dir }) => (
    <div className='w-96 h-96 flex justify-center items-center'>
      <Divider dir={dir}></Divider>
    </div>
  ),
};
