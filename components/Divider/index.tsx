import clsx from "clsx";
import { DividerProps } from "../ComponentTypes";

function Divider({ dir = "x", margin = "none" }: DividerProps) {
  return (
    <div
      className={clsx(
        { "w-full h-px": dir === "x" },
        { "h-4 w-px": dir === "y" },
        { [`mx-${margin}`]: dir === "y" },
        { [`my-${margin}`]: dir === "x" },
        "bg-base-300",
        "rounded-full"
      )}
    ></div>
  );
}

export default Divider;
