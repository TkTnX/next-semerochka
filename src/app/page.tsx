"use client";

import BoughtBefore from "@/components/BoughtBefore/BoughtBefore";
import Header from "@/components/Header/Header";
import News from "@/components/News/News";
import Offers from "@/components/Offers/Offers";
import Promo from "@/components/Promo/Promo";
import Sales from "@/components/Sales/Sales";
import ShopsMap from "@/components/ShopsMap/ShopsMap";
import { fetchProducts, productsSelector } from "@/redux/slices/products";
import { AppDispatch } from "@/redux/store";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { items, status } = useSelector(productsSelector);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {
        // TODO: Доделать первую страницу
      }
      <Header />
      <Promo />
      <Sales status={status} items={items} />
      <News status={status} items={items} />
      <BoughtBefore status={status} items={items} />
      <Offers />
      <ShopsMap />
    </>
  );
}
