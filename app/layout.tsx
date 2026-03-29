import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh | Data Science Student & AI/ML Enthusiast",
  description:
    "Personal portfolio of Lokesh — IIT Madras BS Data Science student building data-driven solutions and intelligent systems.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "AI",
    "Python",
    "IIT Madras",
    "Portfolio",
  ],
  openGraph: {
    title: "Lokesh | Data Science Student & AI/ML Enthusiast",
    description:
      "Building data-driven solutions and intelligent systems. IIT Madras BS Data Science student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
