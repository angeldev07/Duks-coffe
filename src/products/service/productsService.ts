import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environment/environment";
import { Product } from '../interface'

export const productsApi = createApi({
  reducerPath: "productsService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.api.baseUrl}products`, 
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "",
      providesTags: ["Products"],
    }),
    addProducts: builder.mutation({
      query: (body: Product) => ({
        url: "create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProducts: builder.mutation({
      query: (id: number) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    updateProducts: builder.mutation({
      query: (body) => ({
        url: `update/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductsMutation,
  useDeleteProductsMutation,
  useUpdateProductsMutation
} = productsApi;
 