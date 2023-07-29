import HomePage from ".";
import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
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
    <HomePage className='w-[40rem]'>
      <div></div>
    </HomePage>
  ),
};

export const Small: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
  },
  render: ({}) => (
    <HomePage className='md:w-[40rem]'>
      <div></div>
    </HomePage>
  ),
};
