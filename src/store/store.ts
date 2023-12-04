import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "../auth/services";
import { authenticationSlice } from "../auth/slice/authentication";
import { clientsApi } from "../clients/services";
import { clientsSlice } from "../clients/slice/clients";
import { categoryApi } from "../categories/service";
import { categorySlice } from "../categories/slice/categoriesSlice";
import { reviewApi } from "../reviews/service/review";
import { productsSlice } from "../products/slice";
import { productsApi } from "../products/service";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    authentication: authenticationSlice.reducer,
    clients: clientsSlice.reducer,
    categories:  categorySlice.reducer,
    products: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(clientsApi.middleware)
      .concat(categoryApi.middleware)
      .concat(reviewApi.middleware)
      .concat(productsApi.middleware)
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
