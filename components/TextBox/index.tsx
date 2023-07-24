import clsx from "clsx";
import { TextBoxProps } from "../ComponentTypes";

function TextBox({ children, prominent = false }: TextBoxProps) {
  return (
    <>
      <div>
        <div
          className={clsx(
            { "text-2xl text-focus": prominent },
            { "text-xs text-normal": !prominent }
          )}
        >
          {children[0]}
        </div>
        <div
          className={clsx(
            { "text-sm text-muted": prominent },
            { "text-xs text-muted": !prominent }
          )}
        >
          {children[1]}
        </div>
      </div>
    </>
  );
}

export default TextBox;
