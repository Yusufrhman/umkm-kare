import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "UMKM DESA KARE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-6 lg:mx-8 xl:mx-12 font-Figtree`}>
        <NextTopLoader color="#6c7a3f" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
