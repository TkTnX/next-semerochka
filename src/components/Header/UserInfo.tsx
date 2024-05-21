import { Avatar, MenuItem, Typography } from "@mui/material";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import Login from "../Login/Login";
const UserInfo: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Dropdown>
        <MenuButton
          className="hidden md:flex items-center gap-2 hover:opacity-80 transition duration-100"
          // @ts-ignore
        >
          <Avatar>Г</Avatar>
          <Typography
            className="hidden xl:block "
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#232323",
            }}
          >
            Гость
          </Typography>
          <ChevronDown
            className={`hidden lg:block ${
              openMenu ? "rotate-0" : "-rotate-90"
            } transition duration-150`}
            stroke="black"
          />
        </MenuButton>
        <Menu className="bg-white mt-5 hidden md:block  ">
          <MenuItem onClick={() => setOpenMenu(!openMenu)}>
            Войти в аккаунт
          </MenuItem>
          <MenuItem>Профиль</MenuItem>
          <MenuItem>Выйти из аккаунта</MenuItem>
        </Menu>
      </Dropdown>
      {openMenu && <Login openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default UserInfo;
