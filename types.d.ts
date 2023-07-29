import { ReactNode, ReactElement } from "react";

export {};

declare global {
  // Properties

  type Spacing = "none" | "page" | "component" | "item";

  type Variant = "primary" | "secondary" | "tertiary";

  type Direction = "x" | "y";

  // Stack

  type StackProps = {
    className?: string;
    children: ReactNode;
    dir: Direction;
    gap?: Spacing | "full";
    center?: Boolean;
  };

  // Spacer

  type SpacerProps = {
    className?: string;
    dir: Direction;
    margin?: Spacing;
  };

  // Label

  type LabelProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    divider?: boolean;
    borderVisible?: boolean;
  };

  // Divider

  type DividerProps = {
    className?: string;
    dir: Direction;
    margin?: Spacing;
    size: "sm" | "md" | "lg" | "full";
  };

  // Container

  type ContainerProps = {
    className?: string;
    children: ReactNode;
    padding?: Spacing;
    borderVisible?: boolean;
    center?: boolean;
  };

  // Card

  type CardProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    size: "sm" | "md";
    imageVisible?: boolean;
    borderVisible?: boolean;
  };

  // ButtonGroup

  type ButtonGroupProps = {
    className?: string;
    children: ReactNode;
  };

  // Button

  type ButtonProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    variant?: Variant;
  };

  // Toggle

  type ToggleProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    activeChild: 0 | 1;
    borderVisible?: boolean;
  };

  // ScrollList

  type ScrollListProps = {
    className?: string;
    children: ReactNode;
    size: "sm" | "md";
    title: string;
    description: string;
  };

  // TextBox

  type TextBoxProps = {
    className?: string;
    children: [ReactNode<string>, ReactNode<string>];
    prominent: boolean;
  };

  // List

  type ListProps = {
    className?: string;
    children: ReactNode;
    title?: string;
  };

  // Grid

  type GridProps = {
    className?: string;
    children: ReactNode;
    columns: number;
    rows: number;
  };

  // SidebarProps

  type SidebarProps = {
    className?: string;
    children: ReactNode;
  };

  // NavbarProps

  type NavbarProps = {
    className?: string;
    children: ReactNode;
  };

  // ModalProps

  type ModalProps = {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
  };

  // ListViewProps

  type ListViewProps = {
    className?: string;
    children: ReactNode;
  };
}
