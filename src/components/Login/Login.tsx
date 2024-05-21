import React, { useState } from "react";
import AccountForm from "../AccountForm/AccountForm";

const Login: React.FC<{
  setOpenMenu: (bo: boolean) => void;
  openMenu: boolean;
}> = ({ setOpenMenu, openMenu }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <AccountForm
      isLogin={isLogin}
      setIsLogin={(val: boolean) => setIsLogin(val)}
      setOpenMenu={setOpenMenu}
      openMenu={openMenu}
    />
  );
};

export default Login;
