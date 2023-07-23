import Grid from "./Grid";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    dimX: 1,
    dimY: 1,
    gap: "item",
    padding: "item",
  },
  render: ({ dimX, dimY, gap, padding }) => (
    <Grid dimX={dimX} dimY={dimY} gap={gap} padding={padding}>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
    </Grid>
  ),
};
