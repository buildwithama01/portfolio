import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peter Ama",
  description:
    "I Build the Infrastructure Behind Ideas. Peter Ama turns hard problems into working systems, and working systems into ventures.",
  openGraph: {
    title: "Peter Ama",
    description: "I Build the Infrastructure Behind Ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className={`${outfit.className} ${outfit.variable}`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
