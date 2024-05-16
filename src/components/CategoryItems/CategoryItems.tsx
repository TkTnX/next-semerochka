"use client";
import axios from "axios";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Product, { ProductProps } from "../Product/Product";
import {
  Breadcrumbs,
  Button,
  Skeleton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { catalogData } from "@/app/catalog/catalog.data";
import { ChevronRight, CircleX } from "lucide-react";
import Link from "next/link";
import CategoryItemsFilter from "../CategoryItemsFilter/CategoryItemsFilter";

const CategoryItems: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<ProductProps[]>([]);
  const [title, setTitle] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const filterRef = useRef(null);
  const checkSortQueries =
    fromPrice !== 0 && toPrice !== 0
      ? `price[from]=${fromPrice}&price[to]=${toPrice}`
      : "";
  useEffect(() => {
    try {
      axios
        .get(
          `https://3275c8b28b1eb9d3.mokky.dev/products?category=${params.catalogItems}&${checkSortQueries}`
        )
        .then(({ data }) => {
          setData(data);
          setLoading(false);
        });
      catalogData.map((item) => {
        if (item.link === pathname) {
          setTitle(item.title);
        }
      });
    } catch (error) {
      console.log(error);
      alert("Не удалось загрузить продукты!");
      router.push("/catalog");
    }
  }, [toPrice, fromPrice]);

  useEffect(() => {
    if (data) {
      const prices = data.map((product) => product.price);
      //   @ts-ignore
      const concatenatedPrices = [].concat(...prices);
      setMaxPrice(Math.max(...concatenatedPrices));
      setMinPrice(Math.min(...concatenatedPrices));
    }
  }, [data]);

  const handleClickOutside = (event: MouseEvent) => {
    // @ts-ignore

    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setOpenFilter(false);
    }
  };

  useEffect(() => {
    if (openFilter) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openFilter]);

  if (typeof window !== "undefined") {
    if (openFilter) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }

  console.log(data);

  const theme = createTheme({
    // @ts-ignore
    palette: {
      primary: {
        main: "#70c05b",
      },
      warning: {
        main: "#ff6633",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
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
          <Typography fontSize={12} color="#8F8F8F">
            {isLoading ? <Skeleton width={100} /> : title}
          </Typography>
        </Breadcrumbs>
        <h1 className="font-bold text-4xl sm:text-5xl mb-16">
          {isLoading ? (
            <div className="w-full sm:max-w-96">
              <Skeleton height={80} />
            </div>
          ) : (
            title
          )}
        </h1>
        {!isLoading && data.length === 0 ? (
          <h1 className=" font-bold text-2xl text-center">
            К сожалению, <br /> в магазине сейчас нет товаров из данной
            категории
          </h1>
        ) : (
          <div className=" lg:flex justify-between gap-10">
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="block mb-8 lg:hidden text-white rounded py-1 px-4 bg-color-green"
            >
              Фильтр
            </button>
            <div
              ref={filterRef}
              className={`fixed left-0 top-0 bottom-0 bg-white z-20  p-5 pr-7 pt-20 ${
                openFilter ? "translate-x-0" : "-translate-x-full"
              } transition duration-150`}
            >
              <button
                onClick={() => setOpenFilter(false)}
                className="absolute left-3 top-3"
              >
                <CircleX />
              </button>
              {
                <CategoryItemsFilter
                  setOpenFilter={setOpenFilter}
                  setFromPrice={setFromPrice}
                  setToPrice={setToPrice}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  isMobile={true}
                />
              }
            </div>
            {isLoading ? (
              <div className="hidden lg:block -mt-20">
                <Skeleton width={246} height={400} />
              </div>
            ) : (
              <CategoryItemsFilter
                setFromPrice={setFromPrice}
                setToPrice={setToPrice}
                minPrice={minPrice}
                maxPrice={maxPrice}
                isMobile={false}
              />
            )}
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
              {isLoading
                ? [...new Array(4)].map((_, index) => (
                    <Skeleton
                      key={index}
                      height={349}
                      width={253}
                      sx={{ justifySelf: "center" }}
                      variant="rectangular"
                      className="productsSkeleton"
                    />
                  ))
                : data.map((product) => {
                    return <Product key={product.id} {...product} />;
                  })}
            </ul>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CategoryItems;
