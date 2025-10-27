import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import { WaitingListProvider } from "@/contexts/waiting-list-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arbor",
  description: "Intelligence with a smaller footprint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <WaitingListProvider>
          {children}
        </WaitingListProvider>
      </body>
    </html>
  );
}
