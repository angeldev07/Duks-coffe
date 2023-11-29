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
            state.categories = state.categories?.filter((category) => category.id !== state.selectedCategory?.id);
            state.selectedCategory = null;
        }
    },
});

export const { setCategories, setSelectedCategory, deleteCategory} = categorySlice.actions;

export default categorySlice.reducer;