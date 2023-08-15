"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface PageLink {
  label: string;
  link: string;
}

interface NavbarLinksProps {
  pageLinks: PageLink[];
}

export const NavbarLinks: React.FC<NavbarLinksProps> = ({ pageLinks }) => {
  const currentUrl = usePathname();

  return (
    <>
      {pageLinks.map((link, index) => (
        <Link
          href={link.link}
          key={index}
          className={cn(
            "hover:text-foreground font-semibold",
            link.link === currentUrl ? "text-foreground" : ""
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};
