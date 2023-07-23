import classNames from "classnames";

type SpacerProps = {
  dir: "x" | "y";
  margin?: "none" | "page" | "component" | "item";
};

function Spacer({ dir = "x", margin = "none" }: SpacerProps) {
  return (
    <div
      className={classNames(
        { "w-full h-px": dir === "x" },
        { "w-px h-4": dir === "y" },
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

export default Spacer;
