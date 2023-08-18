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
        <div className={"bg-background text-foreground min-h-screen dark"}>
          <nav className="flex flex-row items-center justify-between w-full h-16 border-b border-border bg-background text-foreground px-4 md:px-[16rem]">
            <h1>Icon</h1>
            <p>Link</p>
            <p>Link</p>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
