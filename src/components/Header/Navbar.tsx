import { Badge, Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import favoriteImg from "./images/favorite.svg";
import orderImg from "./images/order.svg";
import cartImg from "./images/cart.svg";
const Navbar: React.FC = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex items-end  gap-6">
        <li>
          <a
            className="grid hover:opacity-80 transition duration-150 gap-2"
            href="/favorite"
          >
            <div className=" justify-self-center">
              <Image
                src={favoriteImg}
                className="h-auto w-auto"
                alt="Любимое"
              />
            </div>
            <p className="text-xs text-center text-color-text font-normal">
              Избранное
            </p>
          </a>
        </li>
        <li>
          <a
            className="grid hover:opacity-80 transition duration-150 gap-2"
            href="/orders"
          >
            <div className="justify-self-center">
              <Image src={cartImg} width={24} height={24} alt="Заказы" />
            </div>
            <p className=" text-xs text-center text-color-text font-normal">
              Заказы
            </p>
          </a>
        </li>
        <li>
          <Stack>
            <a
              href="/cart"
              className=" hover:opacity-80 transition duration-150"
            >
              <Badge
                sx={{ display: "grid", gap: "8px" }}
                badgeContent={1}
                color="success"
              >
                <div className="justify-self-center">
                  <Image src={orderImg} width={24} height={24} alt="Корзина" />
                </div>
                <p className=" text-xs text-center text-color-text font-normal">
                  Корзина
                </p>
              </Badge>
            </a>
          </Stack>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
