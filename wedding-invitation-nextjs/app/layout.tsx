import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Our Wedding | A Celebration of Love", description: "A botanical wedding invitation with love, duas and blessings." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
