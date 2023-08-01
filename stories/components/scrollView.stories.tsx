import { ScrollView, ScrollViewItem } from "@/components/ui/scroll-view";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const meta: Meta<typeof ScrollView> = {
  component: ScrollView,
  title: "Components/ScrollView",
};

export default meta;
type Story = StoryObj<typeof ScrollView>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <ScrollView>
      <ScrollViewItem>
        <Card className='w-[380px]' flex>
          <CardContent>
            <img alt='Image' src='https://picsum.photos/200/300?grayscale' />
          </CardContent>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </ScrollViewItem>

      <ScrollViewItem>
        <Card className='w-[380px]' flex>
          <CardContent>
            <img alt='Image' src='https://picsum.photos/200/300?grayscale' />
          </CardContent>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </ScrollViewItem>

      <ScrollViewItem>
        <Card className='w-[380px]' flex>
          <CardContent>
            <img alt='Image' src='https://picsum.photos/200/300?grayscale' />
          </CardContent>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </ScrollViewItem>

      <ScrollViewItem>
        <Card className='w-[380px]' flex>
          <CardContent>
            <img alt='Image' src='https://picsum.photos/200/300?grayscale' />
          </CardContent>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </ScrollViewItem>

      <ScrollViewItem>
        <Card className='w-[380px]' flex>
          <CardContent>
            <img alt='Image' src='https://picsum.photos/200/300?grayscale' />
          </CardContent>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
        </Card>
      </ScrollViewItem>
    </ScrollView>
  ),
};
