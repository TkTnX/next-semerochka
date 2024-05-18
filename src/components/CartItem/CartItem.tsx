import React from "react";
import { ProductProps } from "../Product/Product";
import Image from "next/image";
import { convertPrice } from "@/utils/convert-price";

const CartItem: React.FC<ProductProps> = ({ img, title, price, discount }) => {
  return (
    <li className="sm:flex items-start justify-between gap-5 bg-white p-2 w-full">
      <div className="flex items-center gap-2">
        <Image src={img} alt={title} width={80} height={60} />
        <div className="grid gap-2">
          <h4>{title}</h4>
          <div className="flex items-center gap-2">
            <p className="font-bold  text-xs">
              {convertPrice(price - 6)}
              <span className="text-verry-sm sm:text-xs  block text-gray-300">
                С картой
              </span>
            </p>
            <p className=" text-xs text-gray-500">
              {convertPrice(price)} <span>за шт.</span>
              <span className="text-verry-sm sm:text-xs  block text-gray-300">
                Обычная
              </span>
            </p>
            {discount && (
              <p className="bg-color-orange text-white px-2 py-1 rounded">
                -{discount}%
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex sm:block md:flex max-w-max gap-6">
        <div className="flex items-center gap-3 bg-color-green rounded p-2 text-white ">
          <button className=" text-xl">-</button>
          <p className="text-xl">2</p>
          <button className=" text-xl">+</button>
        </div>
        <div>
          {discount ? (
            <div>
              <p className="font-bold text-lg">
                {convertPrice(price * Number(`0.${discount}`))}
              </p>
              <p className=" line-through text-gray-400">
                {convertPrice(price)}
              </p>
            </div>
          ) : (
            <p className="font-bold text-lg">{convertPrice(price)}</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
