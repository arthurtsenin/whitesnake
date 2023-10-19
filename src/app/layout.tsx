"use client";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./global.css";

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
  const [mystate, setMystate] = useState(true);
  const myLocalStorageData = useRef(sessionStorage.getItem("jopa"));

  useLayoutEffect(() => {
    if (myLocalStorageData.current === null) {
      setMystate(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      myLocalStorageData.current = sessionStorage.getItem("jopa");
      sessionStorage.setItem("jopa", "net");
      setMystate(true);
    }, 2900);

    return () => clearTimeout(timer);
  }, [mystate]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {mystate ? (
          <div className="layout">
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </div>
        ) : (
          <AppLoader />
        )}
      </body>
    </html>
  );
}
