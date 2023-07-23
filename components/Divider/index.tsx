import clsx from "clsx";
import { DividerProps } from "../ComponentTypes";

function Divider({ dir = "x", margin = "none" }: DividerProps) {
  return (
    <div
      className={clsx(
        { "w-full h-px": dir === "x" },
        "bg-base-300",
        { "w-px h-full": dir === "y" },
        "rounded-full",
        { "mx-page": margin === "page" && dir === "y" },
        { "mx-component": margin === "component" && dir === "y" },
        { "mx-item": margin === "item" && dir === "y" },
        { "my-page": margin === "page" && dir === "x" },
        { "my-component": margin === "component" && dir === "x" },
        { "my-item": margin === "item" && dir === "x" }
      )}
    ></div>
  );
}

export default Divider;
