import clsx from "clsx";
import { Button, Stack, Spacer, Divider } from "../..";
import React, { ReactNode } from "react";

type NavbarProps = {
  className?: string;
  children: ReactNode;
};

function Navbar({ children, className }: NavbarProps) {
  return (
    <div className={className}>
      <div className='fixed top-0 left-0 right-0'>
        <div className='w-full bg-base-200/20 border-b-2 border-base-300 backdrop-blur-lg py-2 px-component text-muted'>
          <Stack dir='x' gap='full' center={true}>
            <Stack dir='x' gap='component' center={true}>
              <div className='w-14 md:w-96 h-14 bg-base-300 rounded-outer'></div>
              <Button variant='primary' className='max-sm:hidden'>
                <p>👋</p>
                <p>Item</p>
              </Button>
              <Button variant='primary' className='max-sm:hidden'>
                <p>👋</p>
                <p>Item</p>
              </Button>
              <Button variant='primary' className='max-sm:hidden'>
                <p>👋</p>
                <p>Item</p>
              </Button>
            </Stack>
            <Stack dir='x' gap='component'>
              <div className='rounded-full bg-base-300 h-12 w-80 max-sm:hidden'></div>
              <div className='bg-base-300 rounded-full w-11 h-11'></div>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
