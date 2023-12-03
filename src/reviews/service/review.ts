// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../environment/environment";
import { Stast } from "../interfaces";

// Define a service using a base URL and expected endpoints
export const reviewApi = createApi({
  reducerPath: "reviewsService",
  baseQuery: fetchBaseQuery({ baseUrl: `${environment.api.baseUrl}products/` }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getStats: builder.query<Stast, void>({
      query: () => "stats",
      providesTags: ["reviews"],
    })
  }),
});

export const {
    useGetStatsQuery,
} = reviewApi;
