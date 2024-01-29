'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import '../styles/mixins/index.scss';
import TopBar from "@/shared/components/topBar";
import Navbar from "@/shared/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Footer from "@/shared/components/footer";
import Wrapper from "@/shared/components/wrapper";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Superflow",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    (async function () {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      var scroll = new LocomotiveScroll();
    })();
  }, [])

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <title>FindMyAITool - List of AI Tools</title>
      </head>
      <body className={inter.className}>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}