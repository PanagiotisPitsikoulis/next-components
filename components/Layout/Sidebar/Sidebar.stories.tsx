import Sidebar from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Layouts/Sidebar",
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <Sidebar>
      <div>
        <p>👋</p>
        <p>Hi</p>
      </div>
    </Sidebar>
  ),
};
