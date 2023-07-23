import Stack from "./Stack";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Stack> = {
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    gap: "item",
    dir: "y",
    justify: "center",
  },
  render: ({ gap, justify, dir }) => (
    <Stack gap={gap} justify={justify} dir={dir}>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
    </Stack>
  ),
};
