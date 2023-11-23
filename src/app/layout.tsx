"use client";

import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

import "./global.css";

import { AppLoader } from "@/feature/ui/AppLoader/AppLoader";
import LayoutScript from "@/shared/analitics/LayoutScript";
import { Footer } from "@/widget/Footer/Footer";
import { FormProvider } from "@/widget/Form/FormProvider/FormProvider";
import { Header } from "@/widget/Header/Header";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mystate, setMystate] = useState(false);
  const [TbFP, setTbFP] = useState(false);
  const router = useRouter();
  useLayoutEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("isFirstLoading")
    ) {
      setMystate(true);
    }
    const timer = setTimeout(() => {
      setMystate(true);
      sessionStorage.setItem("isFirstLoading", "+");
    }, 2900);

    return () => clearTimeout(timer);
  }, [mystate]);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setTbFP(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <html lang="en">
      <Head>
        <LayoutScript />
      </Head>
      <body className={inter.className}>
        {mystate && TbFP ? (
          <>
            <Header />
            <main className="main">{children}</main>

            <Footer />
            <FormProvider />
          </>
        ) : (
          <AppLoader />
        )}
      </body>
    </html>
  );
}
