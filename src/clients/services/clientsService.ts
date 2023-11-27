// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environment/environment";
import { Client } from "../interfaces/clients";

// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: "clientsService",
  baseQuery: fetchBaseQuery({ baseUrl: environment.api.baseUrl }),
  tagTypes: ["Client"],
  endpoints: (builder) => ({
    getAllClients: builder.query<Client[], void>({
      query: () => "clients",
      providesTags: ["Client"],
    }),
    addClient: builder.mutation({
      query: (body: Client) => ({
        url: "clients",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Client"],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `clients/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Client"],
    }),
    updateClient: builder.mutation({
      query: (body) => ({
        url: `clients/update/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Client"],
    }),
  }),
});

export const {
  useGetAllClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation
} = clientsApi;
