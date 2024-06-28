import type { Metadata } from "next";
import { Alumni_Sans } from "next/font/google";
import "./globals.css";

const alumni = Alumni_Sans({ 
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-alumni-sans'
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={alumni.className}>
        <div className="__next">
          <main className="main w-full" id="main">
            <div className="w-full" id='mainPage'>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
