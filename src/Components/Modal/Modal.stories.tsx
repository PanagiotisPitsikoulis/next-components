import Modal from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "High Level/UI/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: { isOpen: true, onClose: () => {} },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ isOpen, onClose }) => (
    <div className='bg-green-500 h-screen w-96 rounded-outer'>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>I am a modal</div>
      </Modal>
    </div>
  ),
};
