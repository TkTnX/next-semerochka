import Cart from "@/components/Cart/Cart";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Семёрочка | Корзина",
};
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

      <Cart />
    </div>
  );
};

export default cartPage;
