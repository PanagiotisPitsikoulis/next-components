import Stack from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: "Low Level/Layout/Stack",
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    gap: "item",
    dir: "y",
  },
  render: ({ gap, dir }) => (
    <div className='w-full h-96'>
      <Stack gap={gap} dir={dir}>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
        <p>Hello World</p>
      </Stack>
    </div>
  ),
};
