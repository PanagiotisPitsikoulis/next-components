import TextBox from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextBox> = {
  component: TextBox,
  title: "High level/UI/TextBox",
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: { prominent: true },
  render: ({ prominent }) => (
    <TextBox prominent={prominent}>
      <p>This is a big title</p>
      <p>And this is a desc bla bla bla</p>
    </TextBox>
  ),
};
