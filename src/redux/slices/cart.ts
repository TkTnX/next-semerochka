import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/components/Product/Product";
import { RootState } from "../store";

interface initialStateType {
  items: ProductProps[];
  totalPrice: number;
}

const initialState: initialStateType = {
  items: [],
  totalPrice: 11111,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!findItem) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        findItem.count += 1;
      }
      state.totalPrice = state.items.reduce((acc, item) => {
        const itemTotalPrice = item.discount
          ? item.price * Number(`0.${item.discount}`) * item.count
          : item.price * item.count;
        return acc + itemTotalPrice;
      }, 0);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count += 1;
      }
      state.totalPrice = state.items.reduce((acc, item) => {
        const itemTotalPrice = item.discount
          ? item.price * Number(`0.${item.discount}`) * item.count
          : item.price * item.count;
        return acc + itemTotalPrice;
      }, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        if (findItem.count === 1) {
          if (confirm("Вы уверены, что хотите удалить товар?")) {
            state.items = state.items.filter((item) => item.id !== findItem.id);
          }
        } else {
          findItem.count -= 1;
        }
      }
      state.totalPrice = state.items.reduce((acc, item) => {
        const itemTotalPrice = item.discount
          ? item.price * Number(`0.${item.discount}`) * item.count
          : item.price * item.count;
        return acc + itemTotalPrice;
      }, 0);
    },
  },
});

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const { addToCart, plusItem, minusItem } = cartReducer.actions;

export default cartReducer.reducer;
