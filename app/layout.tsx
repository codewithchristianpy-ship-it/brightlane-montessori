import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightlanemontessori.com"),
  title: {
    default: "BrightLane Montessori School",
    template: "%s | BrightLane Montessori School",
  },
  description:
    "BrightLane Montessori School brings joyful, child-centered learning to curious minds through nurturing programs, hands-on exploration, and a warm community.",
  keywords: [
    "Montessori school",
    "early childhood education",
    "preschool",
    "primary education",
    "BrightLane",
  ],
  openGraph: {
    title: "BrightLane Montessori School",
    description:
      "A joyful, nurturing Montessori environment that inspires independence, creativity, and confident learners.",
    url: "https://brightlanemontessori.com",
    siteName: "BrightLane Montessori School",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightLane Montessori School",
    description:
      "A joyful, nurturing Montessori environment that inspires independence, creativity, and confident learners.",
  },
  alternates: {
    canonical: "/",
  },
};

const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "BrightLane Montessori School",
  description:
    "BrightLane Montessori School provides Montessori-inspired education for young learners through exploration, creativity, independence, and community.",
  url: "https://brightlanemontessori.com",
  telephone: "+1-555-014-9224",
  email: "hello@brightlanemontessori.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "245 Willow Grove Lane",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/brightlanemontessori",
    "https://www.instagram.com/brightlanemontessori",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${baloo.variable} ${nunito.variable} min-h-screen bg-cloud font-body text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
