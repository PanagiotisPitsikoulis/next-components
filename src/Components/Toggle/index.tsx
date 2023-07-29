import clsx from "clsx";
import Container from "../Container";

function Toggle({
  children,
  activeChild,
  borderVisible,
  className,
}: ToggleProps) {
  return (
    <div className={className}>
      <Container borderVisible={borderVisible} center={true}>
        <div className={clsx({ "p-item text-muted text-center": true })}>
          {activeChild === 0 && children[0]}
          {activeChild === 1 && children[1]}
        </div>
      </Container>
    </div>
  );
}

export default Toggle;