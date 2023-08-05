import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

const NavbarStyles = cva(
  "top-0 left-0 right-0 fixed py-5 md:py-2 padding-page flex flex-row justify-between gap-6 items-center text-md select-none",
  {
    variants: {
      variant: {
        outline: "border-b border-foreground bg-background",
        fill: "bg-primary text-primary-foreground border-b border-foreground/50",
      },
      blur: {
        true: "backdrop-filter bg-primary/40 backdrop-blur-2xl",
      },
    },
  }
);

interface NavbarProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof NavbarStyles> {}

const Navbar: React.FC<NavbarProps> = ({ className, variant, ...props }) => (
  <div className={NavbarStyles({ variant, className })} {...props} />
);

const NavbarBrand: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-row gap-2 font-semibold justify-center items-center",
      className
    )}
    {...props}
  />
);

const NavbarMenu: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-row gap-6 items-center max-sm:hidden", className)}
    {...props}
  />
);

interface NavbarMenuItemProps extends React.HTMLAttributes<HTMLElement> {
  active?: boolean;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  className,
  active,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-row items-center justify-center px-2 py-2 font-semibold text-muted-foreground cursor-pointer hover:text-primary-foreground",
      className,
      active && "text-primary-foreground"
    )}
    {...props}
  />
);

const NavbarActions: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-row gap-2 items-center max-sm:hidden", className)}
    {...props}
  />
);

const NavbarHeader: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-row gap-6 items-center", className)}
    {...props}
  />
);

interface HamburgerMenuProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  title,
  children,
  description,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col gap-1 items-center justify-center cursor-pointer md:hidden",
      className
    )}
    {...props}
  >
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"rightFull"}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  </div>
);

export {
  Navbar,
  HamburgerMenu,
  NavbarActions,
  NavbarBrand,
  NavbarHeader,
  NavbarMenu,
  NavbarMenuItem,
  Menu,
};
