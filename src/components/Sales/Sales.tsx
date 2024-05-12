"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";
import { ProductProps } from "../Product/Product";

const Sales = () => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get("https://3275c8b28b1eb9d3.mokky.dev/products?discount=50")
        .then(({ data }) => setData(data))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="mt-20 container">
          <ProductsList
              isLoading={isLoading}
        title="Акции"
        link="/catalog"
        items={data}
        linkText="Все акции"
      />
    </div>
  );
};

export default Sales;
