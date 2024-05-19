import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "@/components/Product/Product";
import { RootState } from "../store";

interface initialStateType {
  items: ProductProps[];
  totalPrice: number;
}

const initialState: initialStateType = {
  items: [],
  totalPrice: 0,
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
        return acc + item.price * item.count;
      }, 0);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.count = findItem.count + 1;
      }
      state.totalPrice = state.items.reduce((acc, item) => {
        return (acc + item.price) * item.count;
      }, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        if (findItem.count === 1) {
          confirm("Вы уверены, что хотите удалить товар?") &&
            (state.items = state.items.filter(
              (item) => item.id !== findItem.id
            ));
        } else {
          findItem.count -= 1;
        }

        state.totalPrice = state.items.reduce((acc, item) => {
          return (item.price + acc) * item.count;
        }, 0);
      }
    },
  },
});

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const { addToCart, plusItem, minusItem } = cartReducer.actions;

export default cartReducer.reducer;
