import Profile from "@/components/Profile/Profile";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Семёрочка | Профиль",
};

const ProfilePage = () => {
  return (
    <div className="container">

      <Profile />
    </div>
  );
};

export default ProfilePage;
