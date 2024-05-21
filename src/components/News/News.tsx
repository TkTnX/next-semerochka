import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";

const News: React.FC<{ items: ProductProps[]; status: string }> = ({
  items,
  status,
}) => {
  const itemsWithErrorsCheck =
    status === "error" || !items ? [] : items.slice(4, 8);
  return (
    <div className="container mt-28">
      <ProductsList
        isError={status === "error" || !items}
        isLoading={status === "loading"}
        title="Новинки"
        link="/catalog"
        linkText="Все новинки"
        items={itemsWithErrorsCheck}
      />
    </div>
  );
};

export default News;
