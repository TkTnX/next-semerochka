import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";

const News: React.FC<{ items: ProductProps[]; status: string }> = ({
  items,
  status,
}) => {
  return (
    <div className="container mt-28">
      <ProductsList
        isLoading={status === "loading"}
        title="Новинки"
        link="/catalog"
        linkText="Все новинки"
        items={items.slice(4, 8)}
      />
    </div>
  );
};

export default News;
