import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";

const BoughtBefore: React.FC<{ items: ProductProps[]; status: string }> = ({
  items,
  status,
}) => {
  return (
    <div className="container mt-28">
      <ProductsList
        isLoading={status === "loading"}
        title="Покупали раньше"
        link="/catalog"
        linkText="Все покупки"
        items={items.slice(5, 9)}
      />
    </div>
  );
};

export default BoughtBefore;
