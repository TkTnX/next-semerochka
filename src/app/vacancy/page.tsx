import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const VacancyPage = () => {
  return (
    <div className="container">
      <Breadcrumbs
        sx={{ fontSize: "12px" }}
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link className="hover:underline transition duration-150" href="/">
          Главная
        </Link>
        <Typography fontSize={12} color="#8F8F8F">
          Вакансии
        </Typography>
      </Breadcrumbs>

      <h1 className="font-bold text-5xl md:text-6xl mb-10 mt-4">Вакансии</h1>

      <ul className="grid md:grid-cols-3 gap-10">
        {[...new Array(6)].map((_, index) => (
          <li className="bg-white p-8 rounded shadow-md" key={index}>
            <h4 className="font-bold text-2xl mb-4">Должность</h4>
            <div className="mb-4">
              <h5 className="text-lg mb-2">Требования</h5>
              <p>
                Текст про требования текст про требования текст про требования
                текст про требования текст про требования
              </p>
            </div>
            <div className="mb-4">
              <h5 className="text-lg mb-2">Обязанности</h5>
              <p>
                Текст про обязаности текст про обязаности текст про обязаности
                текст про обязаности текст про обязаности
              </p>
            </div>
            <div className="mb-4">
              <h5 className="text-lg mb-2">Условия</h5>
              <p>
                Текст про условия текст про условия текст про условия текст про
                условия текст про условия текст про условия
              </p>
            </div>
            <div>
              <h5 className="text-lg mb-2">Звоните</h5>
              <div className="flex items-center gap-3">
                <Phone />
                <a href="tel:+79042713590" className="text-lg underline">
                  +7 904 271 35 90
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacancyPage;
