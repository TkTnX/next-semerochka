"use client";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductProps } from "../Product/Product";
import Image from "next/image";
import {
  Breadcrumbs,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChevronRight, Info } from "lucide-react";
import Link from "next/link";
import { catalogData } from "@/app/catalog/catalog.data";
import { convertPrice } from "@/utils/convert-price";
import Sales from "../Sales/Sales";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelector } from "@/redux/slices/products";
import { AppDispatch } from "@/redux/store";

const FullProduct: React.FC = () => {
  const { items, status } = useSelector(productsSelector);
  const [data, setData] = useState<ProductProps[]>([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setLoading] = useState(true);
  const product = useParams();
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://3275c8b28b1eb9d3.mokky.dev/products?id=${product.product}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
    dispatch(fetchProducts());
    const path = pathname.split("/");
    catalogData.map((item) => {
      if (item.link === `/${path[1]}/${path[2]}`) {
        setTitle(item.title);
        setLink(item.link);
      }
    });
  }, []);

  return (
    <div className="container">
      <div>
        <Breadcrumbs
          sx={{ fontSize: "12px", marginY: "28px" }}
          separator={<ChevronRight fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link className="hover:underline transition duration-150" href="/">
            Главная
          </Link>
          <Link
            href={"/catalog"}
            className="hover:underline transition duration-150"
          >
            Каталог
          </Link>
          <Link
            className="hover:underline transition duration-150"
            href={link}
            color="#8F8F8F"
          >
            {isLoading ? <Skeleton width={100} /> : title}
          </Link>
          <Typography fontSize={12} color="#8F8F8F">
            {isLoading ? <Skeleton width={100} /> : data[0].title}
          </Typography>
        </Breadcrumbs>

        <h1 className="mb-16 font-bold text-2xl">
          {isLoading ? (
            <Skeleton width={200} height={50} sx={{ width: "100%" }} />
          ) : (
            data[0].title
          )}
        </h1>
        <div className="grid md:flex gap-10 items-start justify-center mb-10">
          {isLoading ? (
            <Skeleton width={272} height={200} />
          ) : (
            <Image
              src={data[0].img}
              alt={data[0].title}
              width={500}
              height={500}
              className="w-auto h-auto justify-self-center"
            />
          )}
          <div>
            <div className="flex items-center justify-between w-auto sm:w-80">
              <h6 className="text-2xl ">
                {isLoading ? <Skeleton /> : convertPrice(data[0].price)}
                <p className="text-xs">Обычная цена</p>
              </h6>
              <h3 className="font-bold text-4xl">
                {isLoading ? <Skeleton /> : convertPrice(data[0].price - 6)}
                <p className="text-xs font-normal">
                  С картой Семерочки
                  <Tooltip title="С картой Семерочки скидка 6 рублей!">
                    <IconButton>
                      <Info />
                    </IconButton>
                  </Tooltip>
                </p>
              </h3>
            </div>
            <p className="text-center text-color-green my-3">
              Вы получаете{" "}
              {isLoading ? <Skeleton /> : (data[0].price * 0.1).toFixed(0)}{" "}
              бонуса(ов)
            </p>
            <button className="mt-4 text-white hover:opacity-80 active:scale-90 transition duration-150 rounded bg-color-orange text-2xl text-center w-full py-4">
              В корзину
            </button>
          </div>
        </div>
        <Sales status={status} items={items} />
      </div>
    </div>
  );
};

export default FullProduct;
