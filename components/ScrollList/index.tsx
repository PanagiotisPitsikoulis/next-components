import clsx from "clsx";
import { ScrollListProps } from "../ComponentTypes";
import { Card, Divider, TextBox } from "..";

function ScrollList({ children }: ScrollListProps) {
  return (
    <>
      <div className={clsx({ "": true })}>{children}</div>
    </>
  );
}

export default ScrollList;
