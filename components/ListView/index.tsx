import clsx from "clsx";
import { Stack } from "..";

function ListView({ children, className }: ListViewProps) {
  return (
    <div className={className}>
      <Stack dir='y' gap='component'>
        {children}
      </Stack>
    </div>
  );
}

export default ListView;
