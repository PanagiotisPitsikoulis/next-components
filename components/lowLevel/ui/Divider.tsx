import classNames from "classnames";

type DividerProps = {
  dir: "x" | "y";
  margin?: "none" | "page" | "component" | "item";
};

function Divider({ dir = "x", margin = "none" }: DividerProps) {
  return (
    <div
      className={classNames(
        { "w-full h-px": dir === "x" },
        "bg-base-300",
        { "w-px h-4": dir === "y" },
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
