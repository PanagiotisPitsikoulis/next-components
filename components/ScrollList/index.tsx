import clsx from "clsx";
import { Divider, TextBox, Stack } from "..";

function ScrollList({ children, size, title, description }: ScrollListProps) {
  return (
    <div>
      <Stack dir='y' gap='component'>
        <TextBox prominent={size === "md"}>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextBox>
        <Divider dir='x' size='full' />
        <div
          className={clsx(
            "flex flex-row gap-5 overflow-x-scroll scrollbar-custom",
            "w-full",
            "pb-3"
          )}
        >
          {children}
        </div>
      </Stack>
    </div>
  );
}

export default ScrollList;
