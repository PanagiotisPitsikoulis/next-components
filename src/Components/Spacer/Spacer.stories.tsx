import Spacer from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  title: "Low Level/Layout/Spacer",
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: { dir: "x", margin: "component" },
  render: ({ dir, margin }) => (
    <div
      className={`flex ${dir === "x" && "flex-row"} ${dir === "y" && "flex-col"}
      `}
    >
      <div className='bg-red-500 w-24 h-24 rounded-outer shrink-0'></div>
      <Spacer dir={dir} margin={margin}></Spacer>
      <div className='bg-red-500 w-24 h-24 rounded-outer shrink-0'></div>
    </div>
  ),
};
