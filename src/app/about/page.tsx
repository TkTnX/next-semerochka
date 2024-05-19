import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { aboutUsList } from "./about.data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Семёрочка | О компании",
};

const aboutUsPage = () => {
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
          О компании
        </Typography>
      </Breadcrumbs>

      <div className="aboutPage mt-6">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4">О компании</h1>
        <p className="font-bold text-sm sm:text-lg md:text-2xl text-color-orange">
          Мы непрерывно развиваемся и <br /> работаем над совершенствованием
          сервиса, <br />
          заботимся о наших клиентах, <br />
          стремимся к лучшему будущему.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mt-28">
        {aboutUsList.map((item, index) => (
          <li
            className="md:max-w-md aboutUsListItem relative pl-10 sm:last:col-span-3 md:last:col-auto "
            key={index}
          >
            <h6 className="text-sm md:text-xl mb-4">{item.title}</h6>
            <p className="font-bold text-sm sm:text-lg md:text-2xl">{item.desc}</p>
          </li>
        ))}
      </ul>
      <div className="grid sm:flex items-center justify-center gap-10 mt-28">
        <Image
          className="justify-self-center"
          src="/aboutPage/logo.svg"
          width={127}
          height={103}
          alt="logo"
        />
        <h6
          className=" text-color-green py-8 px-10 rounded-2xl font-bold text-sm sm:text-lg md:text-2xl "
          style={{ backgroundColor: "#e5ffde" }}
        >
          Спасибо за то, что вы с нами. Семёрочка, везет всегда!
        </h6>
      </div>
    </div>
  );
};

export default aboutUsPage;
