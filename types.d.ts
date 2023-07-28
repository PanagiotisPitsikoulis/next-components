import { ReactNode, ReactElement } from "react";

export {};

declare global {
  // Properties

  type Spacing = "none" | "page" | "component" | "item";

  type Variant = "primary" | "secondary" | "tertiary";

  type Direction = "x" | "y";

  // Stack

  type StackProps = {
    children: ReactNode;
    dir: Direction;
    gap?: Spacing | "full";
    center?: Boolean;
  };

  // Spacer

  type SpacerProps = {
    dir: Direction;
    margin?: Spacing;
  };

  // Label

  type LabelProps = {
    children: [ReactNode, ReactNode];
    divider?: boolean;
    borderVisible?: boolean;
  };

  // Divider

  type DividerProps = {
    dir: Direction;
    margin?: Spacing;
    size: "sm" | "md" | "lg" | "full";
  };

  // Container

  type ContainerProps = {
    children: ReactNode;
    padding?: Spacing;
    borderVisible?: boolean;
    center?: boolean;
  };

  // Card

  type CardProps = {
    children: [ReactNode, ReactNode];
    size: "sm" | "md";
    imageVisible?: boolean;
    borderVisible?: boolean;
  };

  // ButtonGroup

  type ButtonGroupProps = {
    children: ReactNode;
  };

  // Button

  type ButtonProps = {
    children: [ReactElement<ButtonIconProps>, ReactElement<ButtonTextProps>];
    variant?: Variant;
  };

  type ButtonIconProps = {
    children: ReactNode;
  };

  type ButtonTextProps = {
    children: string;
  };

  // Toggle

  type ToggleProps = {
    children: [ReactNode, ReactNode];
    activeChild: 0 | 1;
    borderVisible?: boolean;
  };

  // ScrollList

  type ScrollListProps = {
    children: ReactNode;
    size: "sm" | "md";
    title: string;
    description: string;
  };

  // TextBox

  type TextBoxProps = {
    children: [ReactNode<string>, ReactNode<string>];
    prominent: boolean;
  };

  // List

  type ListProps = {
    children: ReactNode;
    title?: string;
  };

  // Grid

  type GridProps = {
    children: ReactNode;
    columns: number;
    rows: number;
  };
}
