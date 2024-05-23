import ShopsMap from "@/components/ShopsMap/ShopsMap";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight, Home, Percent } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactsPage = () => {
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
          Контакты
        </Typography>
      </Breadcrumbs>
      <h1 className="font-bold text-5xl md:text-6xl mb-10 mt-4">Контакты</h1>
      <ul className="grid justify-center sm:justify-start sm:flex items-center gap-20">
        <li className="flex  gap-3">
          <Home />
          <div className="grid">
            <p className=" text-lg md:text-2xl mb-4">Бухгалтерия, склад</p>
            <a
              href="+78214092619"
              className="font-bold text-lg  md:text-2xl underline"
            >
              +7 82140 92619
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <Percent />
          <div className="grid">
            <p className=" text-lg md:text-2xl mb-4">
              Вопросы по системе лояльности
            </p>
            <a
              href="tel:+79087163397"
              className="font-bold text-lg md:text-2xl underline"
            >
              +7 908 716 33 97
            </a>
          </div>
        </li>
      </ul>
      <ShopsMap />
    </div>
  );
};

export default ContactsPage;
