import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/display/tooltip";

export interface TooltipMinimalProps {
  children: React.ReactNode;
  content: string;
}

export function TooltipMinimal({ children, content }: TooltipMinimalProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className="w-fit">
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
