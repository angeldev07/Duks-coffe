import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environment/environment";
import { Category } from "../interface";

export const categoryApi = createApi({
  reducerPath: "categoryService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.api.baseUrl}categories`,
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query<Category[], void>({
      query: () => "",
      providesTags: ["Category"],
    }),
    addCategory: builder.mutation({
      query: (body: Category) => ({
        url: "create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id: number) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: (body) => ({
        url: `update/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation
} = categoryApi;
 