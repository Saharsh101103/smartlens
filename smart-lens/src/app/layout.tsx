import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "~/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/Navbar";

export const metadata: Metadata = {
  title: "Smart Lens",
  description: "Identify objects with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
        <TRPCReactProvider><Navbar/>
          {children}
          </TRPCReactProvider>
            </ThemeProvider>
      </body>
    </html>
  );
}



