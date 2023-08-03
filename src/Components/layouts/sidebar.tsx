import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "../../lib";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  ChevronDownIcon,
  ChevronsDownUp,
  ChevronsUpDown,
  ChevronUp,
} from "lucide-react";

const SideBarStyles = cva("h-screen select-none w-[16rem] px-8 py-8", {
  variants: {
    variant: {
      outline: "border-r border-foreground bg-background",
      fill: "bg-primary text-primary-foreground border-r border-foreground/50",
    },
    blur: {
      true: "backdrop-filter bg-primary/40 backdrop-blur-xl",
    },
    fixed: { true: "fixed left-0 top-[7rem] bottom-0" },
  },
});

interface SideBarProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof SideBarStyles> {}

const SideBar: React.FC<SideBarProps> = ({
  className,
  variant,
  fixed,
  children,
  ...props
}) => (
  <div className={SideBarStyles({ variant, fixed, className })} {...props}>
    <ScrollArea>
      <div className='flex flex-col gap-6'>{children}</div>
    </ScrollArea>
  </div>
);

const SideBarSection: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  title,
  children,
  ...props
}) => (
  <div className={cn("flex flex-col", className)}>
    <SideBarSectionHeader>{title}</SideBarSectionHeader>
    <div className='flex flex-col'>{children}</div>
  </div>
);

const SideBarSectionHeader: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <div className={cn("text-xl font-semibold mb-2", className)} {...props} />
);

interface SideBarSectionItemProps extends React.HTMLAttributes<HTMLElement> {
  active?: boolean;
}

const SideBarSectionItem: React.FC<SideBarSectionItemProps> = ({
  className,
  active,
  ...props
}) => (
  <div
    className={cn(
      "font-semibold flex py-1 pr-2 flex-row gap-3 text-muted-foreground cursor-pointer hover:text-primary-foreground my-1 pl-3",
      className,
      active && "text-primary-foreground"
    )}
    {...props}
  />
);

const SideBarCollapsibleSection: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, title, ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger>
        <SideBarSectionHeader
          className={cn("flex flex-row items-center gap-32", className)}
        >
          {title}
          {!isOpen && <ChevronsUpDown size={15} />}
          {isOpen && <ChevronsDownUp size={15} />}
        </SideBarSectionHeader>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SideBarSection {...props} />
      </CollapsibleContent>
    </Collapsible>
  );
};

const SideBarCollapsibleItem: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  title,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn("flex flex-row items-center gap-3 pl-3", className)}
      >
        {isOpen && <ChevronDownIcon size={16} />}
        {!isOpen && <ChevronUp size={15} />}
        {title}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SideBarSection {...props} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export {
  SideBar,
  SideBarSection,
  SideBarSectionHeader,
  SideBarSectionItem,
  SideBarCollapsibleSection,
  SideBarCollapsibleItem,
};
