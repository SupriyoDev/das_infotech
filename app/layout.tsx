import AnouncementSection from "@/components/shared/AnouncementSection";
import Header from "@/components/shared/Header";
import QueryclientProvider from "@/components/shared/QueryClientProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Onest, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Das InfoTech",
  description: "A modern computer shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryclientProvider>
      <html lang="en">
        <body
          className={cn(
            "antialiased max-w-full mx-auto min-h-screen  ",
            onest.className
          )}
        >
          {" "}
          <div>
            <AnouncementSection />
            <Header />
          </div>
          <main>{children}</main>
          <div className=" mt-auto">
            <Footer />
          </div>
        </body>
      </html>
    </QueryclientProvider>
  );
}
