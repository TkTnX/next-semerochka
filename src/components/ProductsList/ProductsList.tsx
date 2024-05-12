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
        <h2 className=" font-bold text-2xl md:text-4xl ">{title}</h2>
        <Link
          className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition duration-150"
          href={link}
        >
          <p className="w-28 sm:w-auto">{linkText}</p>
          <ChevronRight />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2  md:flex justify-center lg:justify-between lg:flex-nowrap  gap-3 ">
        {isLoading
          ? [...new Array(4)].map((_, index) => (
              <Skeleton
                key={index}
                height={349}
                variant="rectangular"
                sx={{ width: "100%" }}
                className="w-full"
              />
            ))
          : items.map((product) => <Product key={product.id} {...product} />)}
      </div>
    </div>
  );
};

export default ProductsList;
