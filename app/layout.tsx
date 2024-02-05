import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mastry Course",
  description:
    "This website provides various mastry level courses to improve your skills in different domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100">{children}</body>
    </html>
  );
}
