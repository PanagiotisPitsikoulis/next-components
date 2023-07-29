import List from ".";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "..";
import { multiplyChild } from "../../utils/multiplyChild";

const meta: Meta<typeof List> = {
  component: List,
  title: "High level/Layout/List",
};

export default meta;
type Story = StoryObj<typeof List>;

const ListChild = () => (
  <div className='hover:bg-base-200 p-1 rounded-outer mouse-pointer transition-all'>
    <Label divider={true} borderVisible={false}>
      <p>👉</p>
      <p>I am a list child</p>
    </Label>
  </div>
);

export const Default: Story = {
  args: { title: "This is a list" },
  render: ({ title }) => (
    <List title={title}>{multiplyChild(ListChild(), 5)}</List>
  ),
};
