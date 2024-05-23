import React, { useState } from "react";
import AccountForm from "../AccountForm/AccountForm";

const Login: React.FC<{
  openMenu: boolean;
}> = ({  openMenu }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <AccountForm
      isLogin={isLogin}
      setIsLogin={(val: boolean) => setIsLogin(val)}
      openMenu={openMenu}
    />
  );
};

export default Login;
