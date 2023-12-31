import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../interface";

interface CategoryState {
  categories: Category[] | undefined;
  selectedCategory: Category | null;
}

const initialState: CategoryState = {
  categories: undefined,
  selectedCategory: null,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
    deleteCategory: (state) => {
      state.categories = state.categories?.filter(
        (category) => category.id !== state.selectedCategory?.id
      );
      state.selectedCategory = null;
    },
    addNewCategory: (state, action: PayloadAction<Category>) => {
      state.categories?.push(action.payload);
      state.selectedCategory = null;
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories?.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
      state.selectedCategory = null;
    },
  },
});

export const {
  setCategories,
  setSelectedCategory,
  deleteCategory,
  addNewCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
