import React from "react";
import Link from "next/link";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/sheet";

import { ModeToggle } from "@/components/dark-mode-toggle";
import { AlignJustify } from "lucide-react";
import { NavbarLinks } from "./navbar-links";
import { pageLinks } from "@/app/constants";

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex flex-row items-center justify-between w-full py-3 border-b select-none bg-background/60 backdrop-blur-xl border-border px-x-global px-global-x">
      <div className="flex flex-row items-center gap-8">
        <Link href={"/"}>
          <h1 className="text-xl font-bold">2PAE</h1>
        </Link>
        <div className="flex flex-row gap-5 max-sm:hidden text-muted-foreground">
          <NavbarLinks pageLinks={pageLinks} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <ModeToggle />
        <SheetDemo></SheetDemo>
      </div>
    </nav>
  );
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <AlignJustify />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-5 text-muted-foreground">
          <NavbarLinks pageLinks={pageLinks} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
