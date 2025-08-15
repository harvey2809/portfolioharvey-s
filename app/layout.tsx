import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

// ⬇️ your image (left in assets/)
import bg from "@/assets/images/pexels-steve-28947860.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* dim + blur overlay */}
          <div
            className="fixed inset-0 bg-black/35 backdrop-blur-sm pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* site content above overlay */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
