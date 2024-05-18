"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import CartOrder from "../CartOrder/CartOrder";
import { cartItemsSelector } from "@/redux/slices/cart";

const Cart: React.FC = () => {
  const cartItems = useSelector(cartItemsSelector);
  return (
    <div className="mt-14 sm:flex justify-between items-start gap-14">
      <ul className="grid w-full mb-8 sm:mb-0">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <CartOrder />
    </div>
  );
};

export default Cart;
