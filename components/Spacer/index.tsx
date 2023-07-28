import clsx from "clsx";

function Spacer({ dir = "x", margin = "none" }: SpacerProps) {
  const marginNone = clsx("m-0");
  const marginItemX = clsx("mx-item");
  const marginComponentX = clsx("mx-component");
  const marginPageX = clsx("mx-page");

  const marginItemY = clsx("my-item");
  const marginComponentY = clsx("my-component");
  const marginPageY = clsx("my-page");

  return (
    <div
      className={clsx(
        { "w-px h-px": dir === "x" },
        { "w-px h-px": dir === "y" },
        { [marginNone]: margin === "none" },
        { [marginItemX]: margin === "item" && dir === "x" },
        { [marginComponentX]: margin === "component" && dir === "x" },
        { [marginPageX]: margin === "page" && dir === "x" },
        { [marginItemY]: margin === "item" && dir === "y" },
        { [marginComponentY]: margin === "component" && dir === "y" },
        { [marginPageY]: margin === "page" && dir === "y" }
      )}
    ></div>
  );
}

export default Spacer;
