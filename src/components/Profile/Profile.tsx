"use client";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Profile: React.FC = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (!data || status !== "authenticated") {
    router.push("/");
  }
  const user = data?.user;

  return (
    <div className="mt-6">
      <Breadcrumbs
        sx={{ fontSize: "12px" }}
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link className="hover:underline transition duration-150" href="/">
          Главная
        </Link>
        <Typography fontSize={12} color="#8F8F8F">
          Профиль - {user?.name}
        </Typography>
      </Breadcrumbs>
      <h1 className="font-bold text-6xl mt-6 mb-10 ">Профиль</h1>

      <div className="flex gap-7 justify-center">
        <img
          className=" max-w-32 rounded-full"
          src={user?.image ?? "/profile/notFound.jpg"}
          alt={user?.name !== null ? user?.name : "Имя не найдено"}
        />
        <div className="grid">
          <h4 className="text-2xl  md:text-5xl font-semibold">{user?.name}</h4>
          <button
            className="border rounded px-3 py-1 border-color-orange hover:bg-color-orange hover:text-white transition duration-150"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
