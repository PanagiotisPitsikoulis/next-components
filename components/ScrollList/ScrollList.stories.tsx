import ScrollList from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "..";

const meta: Meta<typeof ScrollList> = {
  component: ScrollList,
};

export default meta;
type Story = StoryObj<typeof ScrollList>;

const generateCards = (count: any, size: any) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <Card size={size} key={i}>
        <p>This is card {i + 1} component</p>
        <p>Card {i + 1} description</p>
      </Card>
    );
  }
  return cards;
};

export const Default: Story = {
  args: { size: "sm", title: "Title", description: "Description" },
  render: ({ size, title, description }) => (
    <ScrollList size={size} title={title} description={description}>
      {generateCards(25, size)}
    </ScrollList>
  ),
};
