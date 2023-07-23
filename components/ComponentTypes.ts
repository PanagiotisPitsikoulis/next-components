import { ReactNode } from "react";

type Spacing = "none" | "page" | "component" | "item";
type Variant = "primary" | "secondary" | "tertiary";
type Direction = "x" | "y";

export type StackProps = {
  children: ReactNode;
  dir?: Direction;
  gap?: Spacing;
};

export type SpacerProps = {
  dir: Direction;
  margin?: Spacing;
};

export type LabelProps = {
  children: [ReactNode, ReactNode];
};

export type GridProps = {
  children: ReactNode;
  dimX?: 1 | 2 | 3 | 4;
  dimY?: 1 | 2 | 3 | 4;
  gap?: Spacing;
  padding?: Spacing;
};

export type DividerProps = {
  dir: Direction;
  margin?: Spacing;
};

export type ContainerProps = {
  children: ReactNode;
  padding?: Spacing;
  borderVisible?: boolean;
};

export type CardProps = {
  children: ReactNode;
  actions?: ReactNode;
};

export type ButtonProps = {
  children: [ReactNode, ReactNode];
  variant?: Variant;
};
