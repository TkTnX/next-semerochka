"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ProductProps } from "../Product/Product";
import axios from "axios";

const BoughtBefore: React.FC = () => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get("https://3275c8b28b1eb9d3.mokky.dev/products")
        .then(({ data }) => setData(data))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="container mt-28">
      <ProductsList
        isLoading={isLoading}
        title="Покупали раньше"
        link="/catalog"
        linkText="Все покупки"
        items={data.slice(5, 9)}
      />
    </div>
  );
};

export default BoughtBefore;
