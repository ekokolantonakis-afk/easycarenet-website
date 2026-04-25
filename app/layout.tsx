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
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://easycarenet.com"),
  title: "easycarenet — Intelligent Systems, Applications & Automation",
  description:
    "Engineered for Control. Built to Evolve. We design and deploy AI systems, websites, apps, and automation for businesses at every stage.",
  keywords: [
    "AI systems",
    "business automation",
    "custom software",
    "intelligent systems",
    "digital transformation",
    "easycarenet",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "easycarenet — Intelligent Systems, Applications & Automation",
    description:
      "Engineered for Control. Built to Evolve. AI systems, websites, apps, and automation for businesses at every stage.",
    type: "website",
    url: "https://easycarenet.com",
    images: [{ url: "/og-pillars.png", width: 1536, height: 1024, alt: "easycarenet — IT Solutions & Services Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "easycarenet — Intelligent Systems, Applications & Automation",
    description: "Engineered for Control. Built to Evolve.",
    images: ["/og-pillars.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  );
}
