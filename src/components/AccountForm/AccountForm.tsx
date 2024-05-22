import { DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { CircleX } from "lucide-react";
import React from "react";
import GithubButton from "../Login/GithubButton";
import { signIn } from "next-auth/react";

const AccountForm: React.FC<{
  setOpenMenu: (bo: boolean) => void;
  openMenu: boolean;
  isLogin: boolean;
  setIsLogin: (val: boolean) => void;
}> = ({ setOpenMenu, openMenu, isLogin, setIsLogin }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      phoneNumber: formData.get("phoneNumber"),
      redirect: false,
    });

    if (res && !res.error) {
      setOpenMenu(false);
    } else {
      console.log(res);
      alert("Не удалось войти в акканут!");
    }
  };

  return (
    <div>
      <Dialog onClose={() => setOpenMenu(false)} open={openMenu}>
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute right-2 top-2"
        >
          <CircleX />
        </button>
        <DialogTitle
          sx={{
            mt: "22px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {isLogin ? "Вход" : "Регистрация"}
        </DialogTitle>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="grid gap-8 p-5 sm:px-20 sm:pb-10"
        >
          <GithubButton />
          {!isLogin && (
            <label className="grid text-lg text-gray-400">
              Имя
              <input
                name="fullName"
                className="text-black text-2xl w-full md:w-auto border  focus-visible:border-color-green py-3 px-4 rounded"
                placeholder="Иван Иванов"
                type="text"
              />
            </label>
          )}
          <label className="grid text-lg text-gray-400">
            Телефон
            <input
              name="phoneNumber"
              className="text-black text-2xl w-full md:w-auto border  focus-visible:border-color-green py-3 px-4 rounded"
              placeholder="+7(999)999-99-99"
              type="tel"
            />
          </label>
          <button
            type="submit"
            className=" bg-color-disabled p-4 text-color-orange text-2xl hover:opacity-80 transition duration-150"
          >
            {isLogin ? "Вход" : "Регистрация"}
          </button>
          <ul className="flex flex-col sm:flex-row items-center justify-between">
            <li>
              <button
                onClick={() => setIsLogin(isLogin ? false : true)}
                type="button"
                className="border border-color-green rounded text-color-green text-xs py-1 px-2 hover:bg-color-green transition duration-150 hover:text-white"
              >
                {isLogin ? "Регистрация" : "Вход"}
              </button>
            </li>
            <li>
              <button type="button" className="text-xs hover:underline">
                Забыли пароль?
              </button>
            </li>
          </ul>
        </form>
      </Dialog>
    </div>
  );
};

export default AccountForm;
