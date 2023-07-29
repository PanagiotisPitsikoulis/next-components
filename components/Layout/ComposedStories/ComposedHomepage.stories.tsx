import { HomePage, Sidebar, Navbar } from "..";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Spacer } from "../..";

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: "Composed/HomePage",
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
  render: ({}) => (
    <div>
      <Navbar>
        <div></div>
      </Navbar>
      <Sidebar className='pt-[5rem] fixed left-5 top-0 bottom-0 max-sm:hidden'>
        <div></div>
      </Sidebar>
      <Stack dir='x' center={true}>
        <Spacer dir='x' className='max-sm:hidden' margin='component' />
        <div className='my-[5rem] md:w-[20rem] sm:w-[5rem] lg:w-[45rem] xl:w-[50rem]'>
          <HomePage>
            <div></div>
          </HomePage>
        </div>
      </Stack>
    </div>
  ),
};
