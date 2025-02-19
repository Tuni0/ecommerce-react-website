import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../../components/Header";
import React from "react";
import { ThemeProvider } from "../../components/theme-provider";
import { SanityLive } from "../../sanity/lib/live";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body>
            <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <Header />
            </header>

            <main>{children}</main>
            <SanityLive />
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
