import Navbar from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Layouts/Navbar",
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <Navbar className='w-[70vh]'>
      <div></div>
    </Navbar>
  ),
};
