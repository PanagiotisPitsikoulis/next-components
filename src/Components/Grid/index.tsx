import clsx from "clsx";

function Grid({ children, className }: GridProps) {
  return (
    <>
      <div className={clsx({ className })}>{children}</div>
    </>
  );
}

export default Grid;
