import { cn } from "@/components/utils";
import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={cn(
            "py-global-y px-global-x min-h-screen bg-background text-foreground",
            "dark"
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
