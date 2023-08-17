import * as React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/layout/scroll-area";
import { cn } from "@/components/utils/utils";

export interface LinkScrollListProps extends React.HTMLAttributes<HTMLElement> {
  props: {
    title: string;
    active?: string;
    content: {
      label: string;
      href: string;
    }[];
  }[];
}

export function LinkScrollList({ props, className }: LinkScrollListProps) {
  return (
    <ScrollArea className={cn("pr-8 rounded-md", className)}>
      {props.map((section, index) => (
        <div key={index} className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            {section.title}
          </h4>
          {section.content.map((item) => (
            <div
              key={item.href}
              className={cn(
                "text-sm my-2 hover:underline",
                section.active !== item.href && "text-muted-foreground",
                section.active === item.href && "text-foreground"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>
      ))}
    </ScrollArea>
  );
}
