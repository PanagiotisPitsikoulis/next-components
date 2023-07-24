import clsx from "clsx";
import { SpacerProps } from "../ComponentTypes";

function Spacer({ dir = "x", margin = "none" }: SpacerProps) {
  return (
    <div
      className={clsx(
        { "w-px h-px": dir === "x" },
        { "w-px h-px": dir === "y" },
        { [`my-${margin}`]: dir === "y" },
        { [`mx-${margin}`]: dir === "x" }
      )}
    ></div>
  );
}

export default Spacer;
