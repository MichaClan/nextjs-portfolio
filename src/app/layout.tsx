import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

// Runs before first paint so the saved theme doesn't flash
const themeScript = `
try {
  var t = localStorage.getItem("theme");
  if (t === "light" || t === "dark" || t === "gray" || t === "pink") {
    document.documentElement.dataset.theme = t;
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${openSans.className} min-h-screen bg-bg text-fg antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}