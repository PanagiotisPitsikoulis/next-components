import { FileDownIcon, Maximize } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ListCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export function LinkCard({
  title,
  description,
  icon,
  children,
}: ListCardProps) {
  return (
    <div className="flex flex-row items-end justify-start gap-5 px-6 py-4 border rounded-md select-none max-sm:min-w-[37vh] w-fit border-border bg-background text-muted-foreground">
      <div className="my-auto">{icon}</div>
      <div className="max-w-[20vh]">
        <h4 className="line-clamp-1 text-foreground">{title}</h4>
        <p className="line-clamp-1">{description}</p>
      </div>
      <div className="ml-auto">{children}</div>
    </div>
  );
}
