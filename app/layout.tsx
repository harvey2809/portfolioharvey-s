import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import backgroundImage from "@/assets/images/pexels-steve-28947860.jpg";

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <img
                src={backgroundImage.src}
                alt="Background"
                className="w-full h-full object-cover brightness-75 blur-sm"
              />
            </div>

            {/* Page Content */}
            <Header />
            <main className="flex-1 container">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
