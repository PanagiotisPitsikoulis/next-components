import clsx from "clsx";
import { ScrollListProps } from "../ComponentTypes";
import { Divider, TextBox, Stack } from "..";

function ScrollList({ children, size, title, description }: ScrollListProps) {
  return (
    <div>
      <Stack dir='y' gap='component'>
        <TextBox prominent={true}>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextBox>
        <Divider dir='x' size='lg' />
        <div
          className={clsx(
            "flex flex-row gap-5 overflow-x-scroll",
            { "h-60": size === "sm" },
            { "h-96": size === "md" },
            "w-lg"
          )}
        >
          {children}
        </div>
      </Stack>
    </div>
  );
}

export default ScrollList;
