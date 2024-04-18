import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: "Pengfei Xie",
  description: "Pengfei Xie's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      </head>
      <body className={""}>{children}</body>
    </html>
  );
}
