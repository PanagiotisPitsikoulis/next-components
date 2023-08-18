import React from "react";
import { ScrollArea } from "../default/ui/scroll-area";

interface PageGridProps {
  children: React.ReactNode;
  menuLeft?: React.ReactNode;
  menuRight?: React.ReactNode;
}

export default function PageGrid({
  children,
  menuLeft,
  menuRight,
}: PageGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="pl-4 md:pl-[16rem] max-sm:hidden">
        <ScrollArea className="h-[80vh]">{menuLeft}</ScrollArea>
      </div>
      <div className="col-span-2">
        <ScrollArea className="h-[80vh]">{children}</ScrollArea>
      </div>
      <div className="pr-4 md:pr-[16rem] max-sm:hidden">
        <ScrollArea className="h-[80vh]">{menuRight}</ScrollArea>
      </div>
    </div>
  );
}
