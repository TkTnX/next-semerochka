import { cartItemsSelector } from "@/redux/slices/cart";
import { RootState } from "@/redux/store";
import { convertPrice } from "@/utils/convert-price";
import { Divider, FormControlLabel, Switch, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CartOrder: React.FC = () => {
  const cartItems = useSelector(cartItemsSelector);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);



  return (
    <div className="w-full sm:w-72">
      <div className="flex items-center max-w-64">
        <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="" />
        <p className="w-full">Списать 200&nbsp;₽ </p>
      </div>
      <p className=" text-gray-400 mt-5 pb-6">На карте накоплено 200&nbsp;₽</p>
      <Divider />

      <div className=" mt-6 pb-6">
        <div className="flex justify-between">
          <p className="text-gray-400">{cartItems.length} товар(а)</p>
          <p>{convertPrice(totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400">Скидка</p>
          <p className=" text-color-orange">{convertPrice(totalPrice * 0.1)}</p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between mt-6">
        <p className="text-gray-400">Итог</p>
        <h6 className="font-bold text-2xl">
          {convertPrice(totalPrice - totalPrice * 0.1)}
        </h6>
      </div>
      {totalPrice < 1000 && (
        <p className=" bg-red-700 text-white py-1 px-2 text-xs rounded mt-6">
          Минимальная сумма заказа 1000р
        </p>
      )}
      <button
        disabled={totalPrice < 1000}
        className=" disabled:text-color-orange disabled:bg-color-disabled bg-color-orange hover:opacity-80 text-white active:scale-95 transition duration-150 mt-4 py-4 rounded w-full  text-2xl"
      >
        Оформить заказ
      </button>
    </div>
  );
};

export default CartOrder;
