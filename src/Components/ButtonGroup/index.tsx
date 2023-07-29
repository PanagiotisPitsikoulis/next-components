import clsx from "clsx";
import { Stack } from "..";

function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div className={className}>
      <div
        className={clsx({
          "bg-base-200 p-1.5 rounded-outer w-fit text-sm": true,
        })}
      >
        <Stack dir='x' gap='item'>
          {children}
        </Stack>
      </div>
    </div>
  );
}

export default ButtonGroup;
