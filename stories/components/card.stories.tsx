import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BellRing, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <Card fill flex outline padding>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export const Advanced: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ className, ...props }: CardProps) => (
    <Card
      className={cn("w-[380px]", className)}
      {...props}
      fill
      flex
      outline
      padding
    >
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className=' flex items-center space-x-4 rounded-md border p-4'>
          <BellRing />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium leading-none'>
              Push Notifications
            </p>
            <p className='text-sm text-muted-foreground'>
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
            >
              <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
              <div className='space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {notification.title}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>
          <Check className='mr-2 h-4 w-4' /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const ImageCard: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ className, ...props }: CardProps) => (
    <Card className={cn("w-[380px]", className)} {...props} flex>
      <CardContent>
        <img src='https://picsum.photos/200/300?grayscale' alt='Image' />
      </CardContent>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
    </Card>
  ),
};
