"use client";

import { Inter } from "next/font/google";
import Head from "next/head";
import { useLayoutEffect, useState } from "react";

import "./global.css";

import LayoutScript from "@/shared/analitics/LayoutScript";
import { FormProvider } from "@/shared/provider/FormProvider";
import { Footer } from "@/widget/Footer/Footer";
import { Header } from "@/widget/Header/Header";

import { AppLoader } from "../feature/ui/AppLoader/AppLoader";

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

  return (
    <html lang="en">
      <Head>
        <LayoutScript />
      </Head>
      <body className={inter.className}>
        {mystate && TbFP ? (
          <div className="layout">
            <Header />
            <main className="main">{children}</main>
            <Footer />
            <FormProvider />
          </div>
        ) : (
          <AppLoader />
        )}
      </body>
    </html>
  );
}
