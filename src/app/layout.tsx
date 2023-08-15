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
        <div className="py-global-y px-global-x">{children}</div>
      </body>
    </html>
  );
}
