import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";

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
        <body className={font.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
