import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { AuthProvider } from "@/utils/AuthProvider";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Семёрочка | Продукты для всей семьи",
  description: "Семёрочка - онлайн-магазин продуктов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <StoreProvider>
        <AuthProvider>
          <body className={font.className}>
            <Header />

            <main>{children}</main>
            <MobileMenu />
            <Footer />
          </body>
        </AuthProvider>
      </StoreProvider>
    </html>
  );
}
