import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialNavBar from "@/components/ui/socialNavBar";
import Footer from "@/components/ui/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transcription",
  description: "Generated by create next app",
  openGraph: {
    url: "https://transcription-ogx09gbk4-rodrigos-projects-794b4790.vercel.app/",
    images: [
      {
        type: "image/jpeg",
        url: "/transcription.jpeg",
        width: 1152, 
        height: 627, 
        alt: "Transcription",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialNavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
