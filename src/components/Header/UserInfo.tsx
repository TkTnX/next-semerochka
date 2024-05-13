import { Avatar, Typography } from "@mui/material";
import { ChevronDown } from "lucide-react";
import React from "react";

const UserInfo: React.FC = () => {
  return (
    <button className="hidden md:flex items-center gap-2 hover:opacity-80 transition duration-100">
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
      <ChevronDown className=" hidden lg:block" stroke="black" />
    </button>
  );
};

export default UserInfo;
