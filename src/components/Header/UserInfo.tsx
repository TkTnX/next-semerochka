import { Avatar, MenuItem, Typography } from "@mui/material";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import Login from "../Login/Login";
import { useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";
const UserInfo: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { data }: { data: Session | null } = useSession();

  return (
    <>
      <Dropdown>
        <MenuButton
          className="hidden md:flex items-center gap-2 hover:opacity-80 transition duration-100"
          // @ts-ignore
        >
          <Avatar>
            {data?.user && data?.user.image ? (
              <img
                className="w-auto h-auto"
                src={data.user.image}
                alt={data.user.name ?? "user avatar"}
              />
            ) : (
              data?.user?.name?.charAt(0)
            )}
          </Avatar>
          <Typography
            className="hidden xl:block "
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#232323",
            }}
          >
            {data ? data.user?.name : "Гость"}
          </Typography>
          <ChevronDown
            className={`hidden lg:block ${
              openMenu ? "rotate-0" : "-rotate-90"
            } transition duration-150`}
            stroke="black"
          />
        </MenuButton>
        <Menu className="bg-white mt-5 hidden md:block  ">
          {!data ? (
            <MenuItem onClick={() => setOpenMenu(!openMenu)}>
              Войти в аккаунт
            </MenuItem>
          ) : (
            <>
              <MenuItem>
                <Link href="/profile">Профиль</Link>
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Выйти из аккаунта</MenuItem>
            </>
          )}
        </Menu>
      </Dropdown>
      {openMenu && <Login openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default UserInfo;
