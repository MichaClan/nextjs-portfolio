import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micha | Portfolio",
  description:
    "Creatief schrijver die code gebruikt om verhalen en werelden tot leven te brengen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body
        className={`${openSans.className} min-h-screen bg-slate-50 text-zinc-900 antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Micha
        </footer>
      </body>
    </html>
  );
}