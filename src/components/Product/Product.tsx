import React from "react";
import Image from "next/image";
import starImg from "./images/star.svg";
import grayStarImg from "./images/grayStar.svg";
import { Button } from "@mui/material";
import { convertPrice } from "@/utils/convert-price";
import Link from "next/link";

export type ProductProps = {
  id?: number;
  title: string;
  img: string;
  discount?: number;
  price: number;
  rating: number;
  category?: string;
  count?: number;
};

const Product: React.FC<ProductProps> = ({
  title,
  id,
  img,
  discount,
  price,
  rating,
  category,
}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <li key={i}>
          <Image src={starImg} className="w-auto h-auto" alt="star" />
        </li>
      );
    } else {
      stars.push(
        <li key={i}>
          <Image src={grayStarImg} className="w-auto h-auto" alt="star" />
        </li>
      );
    }
  }

  return (
    <div className="max-w-64 grid justify-self-center md:justify-self-start  md:first:hidden lg:first:grid rounded shadow bg-white p-2 ">
      <div>
        <Link href={`/catalog/${category}/${id}`}>
          <Image
            src={img}
            width={272}
            className="relative"
            priority
            height={160}
            alt={title}
          />
          {discount && (
            <p className="text-white bg-color-orange py-1 px-2 max-w-max rounded">
              -{discount}%
            </p>
          )}
        </Link>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div>
          <h6 className="font-bold text-sm md:text-lg">
            {convertPrice(price - 6)}
          </h6>
          <p className="font-normal  text-xs text-gray-400">С картой</p>
        </div>
        <div>
          <h6 className="font-normal text-sm md:text-base text-gray-700">
            {convertPrice(price)}
          </h6>
          <p className="font-normal text-xs text-gray-400">Обычная</p>
        </div>
      </div>
      <h4 className="mt-2 text-xs md:text-base font-normal">{title}</h4>
      <ul className="flex gap-1 my-2">{stars}</ul>
      <Button
        sx={{
          borderColor: "#70c05b",
          color: "#70c05b",
          width: "100%",
          ":hover": {
            bgcolor: "#ff6633",
            borderColor: "#ff6633",
            color: "#fff",
          },
        }}
        variant="outlined"
      >
        В корзину
      </Button>
    </div>
  );
};

export default Product;
