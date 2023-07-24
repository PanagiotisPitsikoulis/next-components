import { ReactNode } from "react";

type Spacing = "none" | "page" | "component" | "item";

type Size = "sm" | "md" | "lg";

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
  divider?: boolean;
  borderVisible?: boolean;
};

export type GridProps = {
  children: ReactNode;
  dimX?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  dimY?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gap?: Spacing;
  padding?: Spacing;
};

export type DividerProps = {
  dir: Direction;
  margin?: Spacing;
  size: Size;
};

export type ContainerProps = {
  children: ReactNode;
  padding?: Spacing;
  borderVisible?: boolean;
  center?: boolean;
};

export type CardProps = {
  children: ReactNode;
  actions?: ReactNode;
  size: Size;
  imageVisible?: boolean;
  borderVisible?: boolean;
};

export type ButtonProps = {
  children: [ReactNode, ReactNode];
  variant?: Variant;
};

export type ToggleProps = {
  children: [ReactNode, ReactNode];
  activeChild: 0 | 1;
  borderVisible?: boolean;
};