import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Salute Marathon 2025 | Run for a Safer Tomorrow",
  description: "Join the Salute Marathon on August 9, 2025, at Island Grounds, Chennai. A marathon dedicated to raising awareness for Women's Safety and Drug Awareness. Organized by Youth Wing of Lions Clubs International.",
  keywords: "marathon, Chennai, women's safety, drug awareness, running, charity run, Lions Club, Island Grounds",
  openGraph: {
    title: "Salute Marathon 2025 | Run for a Safer Tomorrow",
    description: "Join us for a marathon dedicated to Women's Safety and Drug Awareness. August 9, 2025, at Island Grounds, Chennai.",
    url: "https://salutemarathon.com",
    siteName: "Salute Marathon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Salute Marathon 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salute Marathon 2025 | Run for a Safer Tomorrow",
    description: "Join us for a marathon dedicated to Women's Safety and Drug Awareness. August 9, 2025, at Island Grounds, Chennai.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-center`}>
        {children}
      </body>
    </html>
  );
}
