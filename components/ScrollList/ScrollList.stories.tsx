import ScrollList from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollList> = {
  component: ScrollList,
};

export default meta;
type Story = StoryObj<typeof ScrollList>;

export const Default: Story = {
  args: {},
  render: ({}) => (
    <ScrollList>
      <div></div>
    </ScrollList>
  ),
};
