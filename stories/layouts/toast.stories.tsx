import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
  toast,
  Button,
  Toaster,
} from "../src";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "Components/Toast",
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <>
      <Toaster />
      <Button
        variant='outline'
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText='Goto schedule to undo'>Undo</ToastAction>
            ),
          });
        }}
      >
        Add to calendar
      </Button>
    </>
  ),
};
