import FullProduct from "@/components/FullProduct/FullProduct";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Семёрочка | Продукт",
  description: "Семёрочка - онлайн-магазин продуктов",
};


const productPage = () => {
  return (
    <div>
      <FullProduct />
    </div>
  );
};

export default productPage;
