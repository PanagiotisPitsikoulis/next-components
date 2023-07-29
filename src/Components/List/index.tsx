import clsx from "clsx";
import { Divider, Stack } from "..";
import React, { ReactNode } from "react";

type ListProps = {
  className?: string;
  children: ReactNode;
  title?: string;
};

function List({ children, title, className }: ListProps) {
  return (
    <div className={className}>
      <h1 className='text-lg text-normal pl-1 pb-5'>{title}</h1>
      <Stack dir='y'>{children}</Stack>
    </div>
  );
}

export default List;
