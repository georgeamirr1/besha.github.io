import type { Metadata } from "next";
import { Amiri, Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "البشعة | كشف الحقيقة والتحكيم الشرعي والعرفي",
  description: "البشعة للتحكيم الشرعي والعرفي - كشف الحقيقة والتحقيق، اليمين على المصحف، التحكيم في النزاعات، كشف السارق، التحكيم القبلي، الفصل في الديات. خدمة سرية وموثوقة.",
  keywords: [
    "البشعة",
    "كشف الحقيقة",
    "التحكيم الشرعي",
    "التحكيم العرفي",
    "كشف السارق",
    "اليمين على المصحف",
    "التحكيم القبلي",
    "الفصل في الديات",
    "كشف الخائن",
    "معرفة الكاذب",
    "أفضل بشعة",
    "رقم البشعة",
    "موقع البشعة",
    "طريق البشعة",
    "المبشع",
    "الحكم في البشعة",
    "الفصل في النزاعات",
    "كشف السارق في البشعة",
    "التحكيم في مصر",
    "بشعة الدقهلية",
    "بشعة الشرقية",
    "بشعة الغربية",
  ],
  authors: [{ name: "البشعة للتحكيم" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "البشعة | كشف الحقيقة والتحكيم الشرعي والعرفي",
    description: "التحكيم الشرعي والعرفي في النزاعات وكشف الحقائق بالطرق الشرعية المعتبرة",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "البشعة للتحكيم وكشف الحقيقة",
    description: "التحكيم الشرعي والعرفي - كشف السارق - اليمين على المصحف",
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
    <html lang="ar" dir="rtl" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${amiri.variable} ${tajawal.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
