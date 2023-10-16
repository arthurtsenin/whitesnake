import { Inter } from "next/font/google";

import "./global.css";

import { Footer } from "@/widget/Footer/Footer";
import { Header } from "@/widget/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
