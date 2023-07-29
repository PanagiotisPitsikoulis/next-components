import ScrollList from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "..";
import { multiplyChild } from "../../utils/multiplyChild";

const meta: Meta<typeof ScrollList> = {
  component: ScrollList,
  title: "High level/Layout/ScrollList",
};

export default meta;
type Story = StoryObj<typeof ScrollList>;

export const Default: Story = {
  args: { size: "sm", title: "Title", description: "Description" },
  render: ({ size, title, description }) => (
    <ScrollList size={size} title={title} description={description}>
      {multiplyChild(
        <Card size={size}>
          <p>This is a card component</p>
          <p>Card description</p>
        </Card>,
        10
      )}
    </ScrollList>
  ),
};
