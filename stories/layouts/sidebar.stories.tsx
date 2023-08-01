import {
  SideBar,
  SideBarSection,
  SideBarSectionHeader,
  SideBarSectionItem,
  SideBarCollapsibleSection,
  SideBarCollapsibleItem,
} from "@/components/layouts/sidebar";
import { Separator } from "@/components/ui/separator";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  title: "Layouts/SideBar",
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <SideBar variant={"outline"} fixed>
      <SideBarSection title='Sleep well'>
        <SideBarSectionItem active>
          <p>🏠</p>
          <p>Home</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>📰</p>
          <p>Blog</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>📱</p>
          <p>Contact</p>
        </SideBarSectionItem>
      </SideBarSection>
      <Separator />
      <SideBarSection title={"Account"}>
        <SideBarSectionItem>
          <p>❕</p>
          <p>Sign out</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>⚙️</p>
          <p>Settings</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>👤</p>
          <p>Profile</p>
        </SideBarSectionItem>
      </SideBarSection>
      <Separator />
      <SideBarCollapsibleSection title={"More"}>
        <SideBarCollapsibleItem>
          <p>Privacy Policy</p>
        </SideBarCollapsibleItem>
        <SideBarCollapsibleItem>
          <p>Terms of Service</p>
        </SideBarCollapsibleItem>
      </SideBarCollapsibleSection>
    </SideBar>
  ),
};

export const Outline: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <SideBar variant={"outline"} fixed>
      <SideBarSection title='Sleep well'>
        <SideBarSectionItem active>
          <p>🏠</p>
          <p>Home</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>📰</p>
          <p>Blog</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>📱</p>
          <p>Contact</p>
        </SideBarSectionItem>
      </SideBarSection>
      <Separator />
      <SideBarSection title={"Account"}>
        <SideBarSectionItem>
          <p>❕</p>
          <p>Sign out</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>⚙️</p>
          <p>Settings</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>👤</p>
          <p>Profile</p>
        </SideBarSectionItem>
      </SideBarSection>
      <Separator />
      <SideBarCollapsibleSection title={"More"}>
        <SideBarSectionItem>
          <p>📝</p>
          <p>Privacy Policy</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>📝</p>
          <p>Terms of Service</p>
        </SideBarSectionItem>
      </SideBarCollapsibleSection>
    </SideBar>
  ),
};

export const Fill: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <SideBar variant={"fill"} fixed>
      <SideBarSection title='Sleep well'>
        <SideBarSectionItem active>
          <p>Home</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>Blog</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>Contact</p>
        </SideBarSectionItem>
      </SideBarSection>
      <Separator />
      <SideBarSection title={"Account"}>
        <SideBarSectionItem>
          <p>Sign out</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>Settings</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>Profile</p>
        </SideBarSectionItem>
      </SideBarSection>
      <Separator />
      <SideBarCollapsibleSection title={"More"}>
        <SideBarSectionItem>
          <p>Privacy Policy</p>
        </SideBarSectionItem>
        <SideBarSectionItem>
          <p>Terms of Service</p>
        </SideBarSectionItem>
      </SideBarCollapsibleSection>
    </SideBar>
  ),
};
