import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molekul/navbar";
import FooterHomePage from "../components/molekul/footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formici | Home",
  description: "DIGITILIZE YOUR “ART” AND LET THE WORLD SEE YOU",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={inter.className} >
        <Navbar />
        {children}
        <FooterHomePage />
      </body>
    </html>
  );
}
