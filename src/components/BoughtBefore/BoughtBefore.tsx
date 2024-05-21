import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";

const BoughtBefore: React.FC<{ items: ProductProps[]; status: string }> = ({
  items,
  status,
}) => {
  const itemsWithErrorsCheck =
    status === "error" || !items ? [] : items.slice(5, 9);
  return (
    <div className="container mt-28">
      <ProductsList
        isError={status === "error" || !items}
        isLoading={status === "loading"}
        title="Покупали раньше"
        link="/catalog"
        linkText="Все покупки"
        items={itemsWithErrorsCheck}
      />
    </div>
  );
};

export default BoughtBefore;
