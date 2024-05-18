import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/components/Product/Product";
import { RootState } from "../store";

interface initialStateType {
    items: ProductProps[];
    totalPrice: number
}

const initialState: initialStateType = {
  items: [
    {
      img: "/products/01.webp",
      title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 89,
      rating: 2,
      discount: 50,
    },
    ],
    totalPrice: 999
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const {} = cartReducer.actions;

export default cartReducer.reducer;
