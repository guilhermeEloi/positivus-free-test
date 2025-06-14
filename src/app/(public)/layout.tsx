"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { spaceGrotesk } from "@/styles/fonts/fonts";

import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css";

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
