import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarHeader,
  NavbarActions,
  HamburgerMenu,
} from "@/components/layouts/navbar";

import { Combobox } from "@/components";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BedDouble, Menu } from "lucide-react";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Layouts/Navbar",
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Outline: Story = {
  args: { variant: "outline" },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ variant }) => (
    <Navbar variant={variant}>
      <NavbarHeader>
        <NavbarBrand>
          <BedDouble />
          <h1>Sleep well</h1>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarMenuItem active={true}>Home</NavbarMenuItem>
          <NavbarMenuItem>Blog</NavbarMenuItem>
          <NavbarMenuItem>About</NavbarMenuItem>
        </NavbarMenu>
      </NavbarHeader>
      <NavbarActions>
        <NavbarMenuItem>Sign out</NavbarMenuItem>
        <NavbarMenuItem>
          <Combobox />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </NavbarMenuItem>
      </NavbarActions>
      <HamburgerMenu
        description='Oh hey you are on a phone'
        title='Hello phone user <3'
      ></HamburgerMenu>
    </Navbar>
  ),
};

export const Fill: Story = {
  args: { variant: "fill" },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ variant }) => (
    <Navbar variant={variant}>
      <NavbarHeader>
        <NavbarBrand>
          <BedDouble />
          <h1>Sleep well</h1>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarMenuItem active={true}>Home</NavbarMenuItem>
          <NavbarMenuItem>Blog</NavbarMenuItem>
          <NavbarMenuItem>About</NavbarMenuItem>
        </NavbarMenu>
      </NavbarHeader>
      <NavbarActions>
        <NavbarMenuItem>Sign out</NavbarMenuItem>
        <NavbarMenuItem>
          <Combobox />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </NavbarMenuItem>
      </NavbarActions>
    </Navbar>
  ),
};

export const Blur: Story = {
  args: { variant: "outline", blur: true },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({ variant, blur }) => (
    <Navbar variant={variant}>
      <NavbarHeader>
        <NavbarBrand>
          <BedDouble />
          <h1>Sleep well</h1>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarMenuItem active={true}>Home</NavbarMenuItem>
          <NavbarMenuItem>Blog</NavbarMenuItem>
          <NavbarMenuItem>About</NavbarMenuItem>
        </NavbarMenu>
      </NavbarHeader>
      <NavbarActions>
        <NavbarMenuItem>Sign out</NavbarMenuItem>
        <NavbarMenuItem>
          <Combobox />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </NavbarMenuItem>
      </NavbarActions>
    </Navbar>
  ),
};
