import CatalogItems from "@/components/CatalogItems/CatalogItems";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Семёрочка | Каталог",
};

const CatalogPage = () => {
  
  return (
    
    <section className="container mt-7">
      <Breadcrumbs
        sx={{ fontSize: "12px" }}
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link className="hover:underline transition duration-150" href="/">
          Главная
        </Link>
        <Typography fontSize={12} color="#8F8F8F">
          Каталог
        </Typography>
      </Breadcrumbs>
      <h1 className="font-bold text-6xl mt-6 mb-16">Каталог</h1>
      <CatalogItems />
    </section>
  );
};

export default CatalogPage;
