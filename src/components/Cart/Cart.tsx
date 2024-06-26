"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CartOrder from "../CartOrder/CartOrder";
import logoImg from "./bigLogo.svg";
import { cartItemsSelector } from "@/redux/slices/cart";
import Image from "next/image";
import Link from "next/link";
import Delivery from "../Delivery/Delivery";

const Cart: React.FC = () => {
  const cartItems = useSelector(cartItemsSelector);
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <>
      <div className="relative max-w-max mt-6">
        <h1 className="font-bold text-6xl">
          {isDelivery ? "Доставка" : "Корзина"}
        </h1>
        {!isDelivery && (
          <p className="bg-color-orange text-white py-1 px-2 max-w-max rounded absolute -right-9 top-0">
            {cartItems.length}
          </p>
        )}
      </div>
      <div className="mt-14 sm:flex justify-between items-start gap-14">
        {isDelivery ? (
          <Delivery />
        ) : cartItems.length === 0 ? (
          <div className="grid w-full text-center mb-3">
            <Image
              className="justify-self-center"
              src={logoImg}
              width={113}
              height={92}
              alt="logo"
            />
            <h2 className="mt-4 font-bold text-2xl">Корзина пуста!</h2>
            <Link
              className=" bg-color-orange text-white max-w-max rounded mx-auto px-5 py-2 mt-5 hover:opacity-80 transition duration-150 active:scale-95"
              href="/catalog"
            >
              В каталог
            </Link>
          </div>
        ) : (
          <ul className="grid w-full mb-8 sm:mb-0 gap-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
        )}
        {cartItems.length !== 0 && <CartOrder isDelivery={isDelivery} setIsDelivery={setIsDelivery} />}
      </div>
    </>
  );
};

export default Cart;
