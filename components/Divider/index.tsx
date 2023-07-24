import clsx from "clsx";
import { DividerProps } from "../ComponentTypes";

function Divider({ dir = "x", margin = "none", size = "md" }: DividerProps) {
  const dividerSmallY = clsx("w-px h-sm");
  const dividerMediumY = clsx("w-px h-md");
  const dividerLargeY = clsx("w-px h-lg");

  const dividerSmallX = clsx("w-sm h-px");
  const dividerMediumX = clsx("w-md h-px");
  const dividerLargeX = clsx("w-lg h-px");

  return (
    <div
      className={clsx(
        { [dividerSmallY]: size === "sm" && dir === "y" },
        { [dividerMediumY]: size === "md" && dir === "y" },
        { [dividerLargeY]: size === "lg" && dir === "y" },
        { [dividerSmallX]: size === "sm" && dir === "x" },
        { [dividerMediumX]: size === "md" && dir === "x" },
        { [dividerLargeX]: size === "lg" && dir === "x" },
        { [`mx-${margin}`]: dir === "y" },
        { [`my-${margin}`]: dir === "x" },
        "bg-base-300",
        "rounded-full"
      )}
    ></div>
  );
}

export default Divider;