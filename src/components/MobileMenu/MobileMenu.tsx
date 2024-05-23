"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import catalogImg from "./images/catalog.svg";
import favoriteImg from "./images/favorite.svg";
import ordersImg from "./images/order.svg";
import cartImg from "./images/cart.svg";
import Link from "next/link";
import { Avatar, Badge, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "@/redux/slices/cart";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import {
  openMenuSelector,
  userInfoDropdownChange,
} from "@/redux/slices/modals";
import { AppDispatch } from "@/redux/store";

const MobileMenu: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const cartItems = useSelector(cartItemsSelector);
  const openMenu = useSelector(openMenuSelector);
  const dispatch: AppDispatch = useDispatch();
  const { data }: { data: Session | null } = useSession();

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
            {data?.user ? (
              <Link href="/profile">
                <Avatar>
                  {data && data.user.image ? (
                    <img src={data.user?.image!} alt={data.user?.name!} />
                  ) : (
                    <p>{data.user?.name?.charAt(0)}</p>
                  )}
                </Avatar>
              </Link>
            ) : (
              <button onClick={() => dispatch(userInfoDropdownChange(true))}>
                <Avatar>Г</Avatar>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
