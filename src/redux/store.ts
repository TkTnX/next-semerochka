import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import cartReducer from "./slices/cart";
import modalsReducer from "./slices/modals";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
