import CategoryItems from "@/components/CategoryItems/CategoryItems";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Семёрочка | Категория",
  description: "Семёрочка - онлайн-магазин продуктов",
};

const CatalogItems = () => {
  return (
    <>
      <CategoryItems />
    </>
  );
};

export default CatalogItems;
