import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";

const Sales: React.FC<{ items: ProductProps[]; status: string }> = ({
  items,
  status,
}) => {
  return (
    <div className="mt-20 container">
      <ProductsList
        isLoading={status === "loading"}
        title="Акции"
        link="/catalog"
        items={items.filter((obj) => !!obj.discount)}
        linkText="Все акции"
      />
    </div>
  );
};

export default Sales;
