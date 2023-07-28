import clsx from "clsx";
import { Stack } from "..";

function ButtonGroup({ children }: ButtonGroupProps) {
  return (
    <>
      <div
        className={clsx({
          "bg-base-200 p-1.5 rounded-outer w-fit text-sm": true,
        })}
      >
        <Stack dir='x' gap='item'>
          {children}
        </Stack>
      </div>
    </>
  );
}

export default ButtonGroup;
