import { useEffect, useRef, useState } from "react";

export function useComponentHeight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);
  const [height, setHeight] = useState(0);
  return { height, ref };
}
