import Container from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    padding: "component",
  },
  render: ({ padding }) => (
    <Container padding={padding}>
      <p>Hello world</p>
    </Container>
  ),
};
