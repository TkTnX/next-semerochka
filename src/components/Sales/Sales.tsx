import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";

const Sales: React.FC<{ items: ProductProps[]; status: string }> = ({
  items,
  status,
}) => {
  const itemsWithErrorsCheck =
    status === "error" || !items ? [] : items.filter((obj) => !!obj.discount);
  return (
    <div className="mt-20 container">
      <ProductsList
        isError={status === "error" || !items}
        isLoading={status === "loading"}
        title="Акции"
        link="/catalog"
        items={itemsWithErrorsCheck}
        linkText="Все акции"
      />
    </div>
  );
};

export default Sales;
