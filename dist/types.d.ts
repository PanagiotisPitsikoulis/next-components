import React, { ReactNode } from "react";
type ButtonProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    variant?: "primary" | "secondary" | "tertiary";
};
export function Button({ children, variant, className }: ButtonProps): React.JSX.Element;
type CardProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    size: "sm" | "md";
    imageVisible?: boolean;
    borderVisible?: boolean;
};
export function Card({ children, size, imageVisible, borderVisible, className, }: CardProps): React.JSX.Element;
type ContainerProps = {
    className?: string;
    children: ReactNode;
    padding?: "none" | "page" | "component" | "item";
    borderVisible?: boolean;
    center?: boolean;
};
export const Container: ({ children, padding, borderVisible, center, className, }: ContainerProps) => React.JSX.Element;
type DividerProps = {
    className?: string;
    dir: "x" | "y";
    margin?: "none" | "page" | "component" | "item";
    size: "sm" | "md" | "lg" | "full";
};
export function Divider({ dir, margin, size, className, }: DividerProps): import("react").JSX.Element;
type GridProps = {
    className?: string;
    children: ReactNode;
    columns: number;
    rows: number;
};
export function Grid({ children, className }: GridProps): React.JSX.Element;
type LabelProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    divider?: boolean;
    borderVisible?: boolean;
};
export function Label({ children, divider, borderVisible, className }: LabelProps): React.JSX.Element;
type SpacerProps = {
    className?: string;
    dir: "x" | "y";
    margin?: "none" | "page" | "component" | "item";
};
export function Spacer({ dir, margin, className }: SpacerProps): import("react").JSX.Element;
type StackProps = {
    className?: string;
    children: ReactNode;
    dir: "x" | "y";
    gap?: "none" | "page" | "component" | "item" | "full";
    center?: Boolean;
};
export function Stack({ children, dir, gap, center, className, }: StackProps): React.JSX.Element;
type ToggleProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    activeChild: 0 | 1;
    borderVisible?: boolean;
};
export function Toggle({ children, activeChild, borderVisible, className, }: ToggleProps): React.JSX.Element;
type TextBoxProps = {
    className?: string;
    children: [ReactNode, ReactNode];
    prominent: boolean;
};
export function TextBox({ children, prominent, className }: TextBoxProps): React.JSX.Element;
type ScrollListProps = {
    className?: string;
    children: ReactNode;
    size: "sm" | "md";
    title: string;
    description: string;
};
export function ScrollList({ children, size, title, description, className, }: ScrollListProps): React.JSX.Element;
type ButtonGroupProps = {
    className?: string;
    children: ReactNode;
};
export function ButtonGroup({ children, className }: ButtonGroupProps): React.JSX.Element;
type ListProps = {
    className?: string;
    children: ReactNode;
    title?: string;
};
export function List({ children, title, className }: ListProps): React.JSX.Element;
type HomePageProps = {
    children: React.ReactNode;
    className?: string;
};
export function HomePage({ children, className }: HomePageProps): import("react").JSX.Element;
type SidebarProps = {
    className?: string;
    children: ReactNode;
};
export function Sidebar({ children, className }: SidebarProps): React.JSX.Element;
type NavbarProps = {
    className?: string;
    children: ReactNode;
};
export function Navbar({ children, className }: NavbarProps): React.JSX.Element;

//# sourceMappingURL=types.d.ts.map
