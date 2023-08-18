"use client";
import React, { useState } from "react";
import ComponentGrid from "@/registry/composed/component-grid";
import { Separator } from "@/registry/default/ui/separator";
import TextBox from "@/registry/composed/textbox";
import componentsArray from "@/registry/default/componentsArray";
import Link from "next/link";
import PageGrid from "@/registry/composed/page-grid";
import { cn } from "@/lib/utils";
import { Input } from "@/registry/default/ui/input";

const componentNames = [
  "Accordion",
  "Alert",
  "Aspect",
  "Avatar",
  "Badge",
  "Button",
  "Calendar",
  "Card",
  "Checkbox",
  "Collapsible",
  "Combobox",
  "Command",
  "Context",
  "Data",
  "Date",
  "Dialog",
  "Dropdown",
  "Hover",
  "Input",
  "Label",
  "Menubar",
  "Mode",
  "Navigation",
  "Popover",
  "Progress",
  "Radio",
  "Scroll",
  "Select",
  "Separator",
  "Sheet",
  "Skeleton",
  "Slider",
  "Switch",
  "Table",
  "Tabs",
  "Textarea",
  "Toast",
  "Toggle",
  "Tooltip",
  "Typography",
];

const filteredComponents = componentNames.map((name) => {
  return {
    name,
    components: componentsArray.filter(
      (component) => component.name.split(" ")[0] === name
    ),
  };
});

export default function Home() {
  return (
    <div className="py-global-y">
      <PageGrid
        menuLeft={
          <div className="flex flex-col gap-2 text-md">
            <p className="text-sm font-semibold">
              {componentNames.length} Components
            </p>
            <p className="text-xs text-muted-foreground">
              {componentsArray.length} variants.
            </p>
            <div className="my-4" />
            <p className="font-semibold">Components</p>
            {componentNames.map((name, index) => (
              <Link
                className={"text-muted-foreground hover:text-foreground"}
                key={index}
                href={`/Home/${name}`}
              >
                {name}
              </Link>
            ))}
          </div>
        }
        menuRight={<></>}
      >
        <Content />
      </PageGrid>
    </div>
  );
}

function Content() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchFilteredComponents = filteredComponents.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col w-full gap-5 px-5 bg-background">
        <div>
          <Input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="my-2"
          />
          {searchFilteredComponents.map(({ name, components }) => (
            <div key={name} className="my-24">
              <TextBox headingText={name} variant="subtle" center={false} />
              <Separator className="my-2" />
              <ComponentGrid components={components} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
