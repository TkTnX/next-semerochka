import React from "react";
import { deliveryData } from "./delivery.data";

const Delivery: React.FC = () => {
  return (
    <div className="my-16">
      <div>
        <h2 className="font-bold text-4xl mb-6">Куда</h2>
        <div className="flex flex-wrap items-center justify-start md:justify-between gap-10">
          <label className="grid gap-1 text-gray-500">
            Населенный пункт
            <select className="bg-white py-2 px-4 rounded">
              {deliveryData.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-gray-500 ">
            Улица
            <input className="bg-white py-2 px-4 roundeds" type="text" />
          </label>
          <label className="grid gap-1 text-gray-500 w-20">
            Дом
            <input
              placeholder="9"
              className="bg-white py-2 px-4 rounded w-full"
              type="number"
            />
          </label>
          <label className="grid gap-1 text-gray-500 max-w-14">
            Квартира
            <input
              placeholder="2"
              className="bg-white py-2 px-4 rounded w-full"
              type="number"
            />
          </label>
          <label className="grid gap-1 text-gray-500 max-w-28">
            Дополнительно
            <input className="bg-white py-2 px-4 rounded w-full" type="text" />
          </label>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-4xl mb-6 ">Вход</h2>
        <form className="flex gap-10 items-center flex-wrap">
          <input
            className="bg-white py-2 px-4"
            type="tel"
            placeholder="Ваш телефон"
          />
          <button className="rounded bg-color-orange p-2 text-white hover:opacity-80">
            Получить код
          </button>
          <a href="#!" className=" text-color-green">
            Войти по почте
          </a>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
