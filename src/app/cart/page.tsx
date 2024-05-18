import Cart from "@/components/Cart/Cart";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const cartPage = () => {
  return (
    <div className="container mt-6">
      <Breadcrumbs
        sx={{ fontSize: "12px" }}
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link className="hover:underline transition duration-150" href="/">
          Главная
        </Link>
        <Typography fontSize={12} color="#8F8F8F">
          Корзина
        </Typography>
      </Breadcrumbs>
      <div className="relative max-w-max mt-6">
        <h1 className="font-bold text-6xl">Корзина</h1>
        <p className="bg-color-orange text-white py-1 px-2 max-w-max rounded absolute -right-9 top-0">
          3
        </p>
      </div>
      <Cart />
    </div>
  );
};

export default cartPage;
