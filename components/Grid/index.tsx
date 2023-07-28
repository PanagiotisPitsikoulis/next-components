import clsx from "clsx";

function Grid({ children }: GridProps) {
  return (
    <>
      <div className={clsx({ "": true })}>{children}</div>
    </>
  );
}

export default Grid;
