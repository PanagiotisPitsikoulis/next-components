import { DashboardPage } from "@/components/layouts/Examples/dashboard";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DashboardPage> = {
  component: DashboardPage,
  title: "Layouts/DashboardPage",
};

export default meta;
type Story = StoryObj<typeof DashboardPage>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: () => <DashboardPage></DashboardPage>,
};
