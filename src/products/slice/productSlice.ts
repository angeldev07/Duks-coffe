import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../interface";

interface ProductState {
  products: Product[] | undefined;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: undefined,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    deleteProduct: (state) => {
      state.products = state.products?.filter(
        (product) => product.id !== state.selectedProduct?.id
      );
      state.selectedProduct = null;
    },
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.products!.push(action.payload); 
      state.selectedProduct = null;
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products?.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
      state.selectedProduct = null;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  deleteProduct,
  addNewProduct,
  updateProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
