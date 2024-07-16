import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import Searchbox from "@/components/Searchbox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Searchbox />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
