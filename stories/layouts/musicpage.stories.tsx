import { MusicPage } from "@/components/layouts/Examples/MusicPage";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MusicPage> = {
  component: MusicPage,
  title: "Layouts/MusicPage",
};

export default meta;
type Story = StoryObj<typeof MusicPage>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: () => <MusicPage></MusicPage>,
};
