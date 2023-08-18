import React from "react";
import { cn } from "@/lib/utils";

interface componentsArray {
  name: string;
  component: JSX.Element;
}

interface compondentGridProps {
  components: componentsArray[];
}

export default function ComponentGrid({ components }: compondentGridProps) {
  return (
    <div className="grid gap-4 py-16 md:grid-cols-2 place-items-center">
      {components.map((item, index) => (
        <div
          className="w-full h-full p-8 border rounded-2xl border-border bg-neutral-50 dark:bg-neutral-900/50"
          key={index}
        >
          <div>
            <h2 className="pb-1 mb-2 -mt-4 font-semibold text-center text-muted-foreground">
              {item.name}
            </h2>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 rounded-md">
            {item.component}
          </div>
        </div>
      ))}
    </div>
  );
}
