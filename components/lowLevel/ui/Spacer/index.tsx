import classNames from "classnames";

type SpacerProps = {
  dir: "x" | "y";
  margin?: "none" | "page" | "component" | "item";
};

function Spacer({ dir = "x", margin = "none" }: SpacerProps) {
  return (
    <div
      className={classNames(
        { "w-px h-px": dir === "x" },
        { "w-px h-px": dir === "y" },
        { "my-page": margin === "page" && dir === "y" },
        { "my-component": margin === "component" && dir === "y" },
        { "my-item": margin === "item" && dir === "y" },
        { "mx-page": margin === "page" && dir === "x" },
        { "mx-component": margin === "component" && dir === "x" },
        { "mx-item": margin === "item" && dir === "x" }
      )}
    ></div>
  );
}

export default Spacer;
