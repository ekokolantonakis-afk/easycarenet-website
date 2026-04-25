import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://easycarenet.com"),
  title: "easycarenet — Engineered for Control. Built to Evolve.",
  description:
    "easycarenet builds owned business infrastructure — systems, apps, automations, and AI agents that clients control. AI-native. Enterprise-grade. Owned by you, not rented.",
  keywords: [
    "AI systems",
    "business automation",
    "custom software",
    "intelligent systems",
    "owned infrastructure",
    "easycarenet",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "easycarenet — Engineered for Control. Built to Evolve.",
    description:
      "Owned business infrastructure — systems, apps, automations, and AI agents that you control.",
    type: "website",
    url: "https://easycarenet.com",
    images: [{ url: "/og-pillars.png", width: 1536, height: 1024, alt: "easycarenet — IT Solutions & Services Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "easycarenet — Engineered for Control. Built to Evolve.",
    description: "Owned business infrastructure. AI-native. Enterprise-grade.",
    images: ["/og-pillars.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
