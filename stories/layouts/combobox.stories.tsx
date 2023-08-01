import { Combobox } from "../src";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: "Components/Combobox",
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: () => <Combobox />,
};
