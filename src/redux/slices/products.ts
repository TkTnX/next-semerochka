import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductProps } from "@/components/Product/Product";
import axios from "axios";
import { RootState } from "../store";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://3275c8b28b1eb9d3.mokky.dev/products"
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface initialStateType {
  products: { items: ProductProps[]; status: string };
}

const initialState: initialStateType = {
  products: {
    items: [],
    status: "loading",
  },
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Все продукты
    builder.addCase(fetchProducts.pending, (state) => {
      (state.products.items = []), (state.products.status = "loading");
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.products.items = action.payload),
        (state.products.status = "loaded");
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      (state.products.items = []), (state.products.status = "error");
    });
  },
});

export const productsSelector = (state: RootState) => state.products.products;

export const {} = productsReducer.actions;

export default productsReducer.reducer;
