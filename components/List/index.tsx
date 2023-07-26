import clsx from "clsx";
import { ListProps } from "../ComponentTypes";
import { Divider, Stack } from "..";

function List({ children, title }: ListProps) {
  return (
    <>
      <h1 className='text-lg text-normal pl-1 pb-5'>{title}</h1>
      <Stack dir='y'>{children}</Stack>
    </>
  );
}

export default List;
