"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { Space_Grotesk } from "next/font/google";

import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={spaceGrotesk.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
