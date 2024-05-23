import Profile from "@/components/Profile/Profile";
import { Metadata } from "next";
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
