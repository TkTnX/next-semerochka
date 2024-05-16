"use client";
import React, { useState } from "react";
import logo from "./images/logo.svg";
import searchImg from "./images/search.svg";
import Image from "next/image";
import { catalogData } from "@/app/catalog/catalog.data";
import {
  AppBar,
  Autocomplete,
  Box,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import { useRouter } from "next/navigation";
import CatalogMenu from "../CatalogMenu/CatalogMenu";
const Header = () => {
  const [value, setValue] = useState("");
  const [openCatalog, setOpenCatalog] = useState(false);
  const navigate = useRouter();
  const handleChangeValue = (e: any) => setValue(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate.push(value);
    catalogData.map((item) => {
      if (item.title.includes(value)) {
        navigate.push(item.link);
      }
    });
  };

  return (
    <>
      {openCatalog && <CatalogMenu />}
      <AppBar
        sx={{ background: "white", boxShadow: "none" }}
        position="static"
        className=" py-4 bg-white"
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
          }}
          className="gap-2 md:gap-4 lg:gap-7  items-center"
        >
          <Typography
            component="a"
            href="/"
            sx={{
              color: "#414141",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "1.5",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginRight: "5px",
            }}
          >
            <Image
              src={logo}
              className=" min-w-10"
              width={40}
              height={32}
              alt="logo"
            />
            <p className="hidden lg:block">СЕМЕРОЧКА</p>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={() => setOpenCatalog(!openCatalog)}
              className="hidden md:flex rounded items-center bg-color-green p-2 lg:p-1 lg:pl-2 text-white font-normal leading-6 text-center  hover:opacity-80 hover:bg-color-green relative"
            >
              <Menu />
              <Typography className="p-2 hidden lg:block">Каталог</Typography>
            </button>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="border border-color-green rounded  flex items-center "
            >
              <div className="w-full md:max-w-72">
                <Autocomplete
                  id="country-select-demo"
                  // sx={{ width: 280, pl: "20px" }}
                  className=" w-full sm:w-72"
                  options={catalogData}
                  autoHighlight
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <p key={option.link}>{option.title}</p>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <>
                      <TextField
                        {...params}
                        value={value}
                        variant="outlined"
                        onChange={(e) => handleChangeValue(e)}
                        onBlur={(e) => handleChangeValue(e)}
                        placeholder="Поиск"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "off", // disable autocomplete and autofill
                          className: "h-0",
                        }}
                      />
                    </>
                  )}
                />
              </div>
              <div className="pr-2">
                <button className=" justify-self-center w-6  ">
                  <Image src={searchImg} width={24} height={24} alt="search" />
                </button>
              </div>
            </form>
          </Box>
          <Navbar />
          <UserInfo />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
