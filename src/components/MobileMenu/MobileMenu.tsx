"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import catalogImg from "./images/catalog.svg";
import favoriteImg from "./images/favorite.svg";
import ordersImg from "./images/order.svg";
import cartImg from "./images/cart.svg";
import Link from "next/link";
import { Avatar, Badge, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { cartItemsSelector } from "@/redux/slices/cart";

const MobileMenu: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const cartItems = useSelector(cartItemsSelector);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtBottom(window.scrollY + window.innerHeight >= documentHeight);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex md:hidden transition duration-150  fixed z-20 bottom-0 left-0 right-0 w-full gap-6 mx-auto p-2  items-center bg-white ${
        isAtBottom ? "at-bottom" : ""
      }`}
    >
      <nav className="max-w-max mx-auto">
        <ul className="flex items-center gap-9 relative">
          <li>
            <Link href="/catalog">
              <Image src={catalogImg} className="w-auto h-auto" alt="Каталог" />
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <Image
                src={favoriteImg}
                className="w-auto h-auto"
                alt="Избранное"
              />
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <Image src={cartImg} className="w-auto h-auto" alt="Заказы" />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Stack>
                <Badge
                  sx={{ display: "grid", gap: "8px" }}
                  badgeContent={cartItems.length}
                  color="success"
                >
                  <Image
                    src={ordersImg}
                    className="h-auto w-auto"
                    alt="Корзина"
                  />
                </Badge>
              </Stack>
            </Link>
          </li>
          <li>
            <button onClick={() => setOpenMenu(!openMenu)}>
              <Avatar>Г</Avatar>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
