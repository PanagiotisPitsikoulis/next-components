import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ComboboxProps {
  SearchItems: {
    value: string;
    label: string;
  }[];
  title: React.ReactNode;
  placeholder: string;
  notFound: string;
  className?: string;
  handleSelect: (value: string) => void;
}

function Combobox({
  SearchItems,
  placeholder,
  className,
  notFound,
  handleSelect,
  title,
}: ComboboxProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {value
            ? SearchItems.find((SearchItem) => SearchItem.value === value)
                ?.label
            : title}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{notFound}</CommandEmpty>
          <CommandGroup>
            {SearchItems.map((SearchItem) => (
              <CommandItem
                key={SearchItem.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  handleSelect(currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === SearchItem.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {SearchItem.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { Combobox };
