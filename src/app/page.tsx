"use client";

import BoughtBefore from "@/components/BoughtBefore/BoughtBefore";
import News from "@/components/News/News";
import Offers from "@/components/Offers/Offers";
import Promo from "@/components/Promo/Promo";
import Sales from "@/components/Sales/Sales";
import ShopsMap from "@/components/ShopsMap/ShopsMap";
import { fetchProducts, productsSelector } from "@/redux/slices/products";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { items, status } = useSelector(productsSelector);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
      alert("Не удалось получить данные!");
    }
  }, []);

  return (
    <>
      <Promo />
      <Sales status={status} items={items} />
      <News status={status} items={items} />
      <BoughtBefore status={status} items={items} />
      <Offers />

      <ShopsMap />
    </>
  );
}
