import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from "./components/theme-toggle";

export const metadata: Metadata = {
  title: "NextJS Todo App",
  description: "Local app to manage your todo list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body>
          <Header />
          <ThemeToggle />
            {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
