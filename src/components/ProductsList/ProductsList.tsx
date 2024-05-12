import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Product, { ProductProps } from "../Product/Product";
import { Skeleton } from "@mui/material";

export type ProductsListProps = {
  title: string;
  link: string;
  items: ProductProps[];
  linkText: string;
  isLoading: boolean;
};

const ProductsList: React.FC<ProductsListProps> = ({
  title,
  link,
  items = [],
  linkText,
  isLoading,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className=" font-bold text-4xl ">{title}</h2>
        <Link
          className="flex items-center gap-2 hover:opacity-80 transition duration-150"
          href={link}
        >
          {linkText} <ChevronRight />
        </Link>
      </div>
      <div className="mt-10 flex justify-between gap-3 ">
        {isLoading
          ? [...new Array(4)].map((_, index) => (
              <Skeleton
                key={index}
                width={272}
                height={349}
                variant="rectangular"
              />
            ))
          : items.map((product) => <Product key={product.id} {...product} />)}
      </div>
    </div>
  );
};

export default ProductsList;
