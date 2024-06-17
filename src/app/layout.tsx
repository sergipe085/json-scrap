import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const fontSans = FontSans({ subsets: ["latin"], weight: ["200", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Json scrap",
  description: "Extract JSON from any data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" data-theme="winter">
        <body className={`${fontSans.className}`}>
          <div className="bg-base-300 min-h-screen flex items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
