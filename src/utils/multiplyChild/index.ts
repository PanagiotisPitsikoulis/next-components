import React, { ReactNode } from "react";

export const multiplyChild = (children: ReactNode, count: number) => {
  const output = [];
  for (let i = 0; i < count; i++) {
    output.push(children);
  }
  return output;
};
