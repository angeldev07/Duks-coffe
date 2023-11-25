// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { environment } from '../../environment/environment'
import { Client } from '../interfaces/clients'

// Define a service using a base URL and expected endpoints
export const clientsApi = createApi({
  reducerPath: 'clientsService',
  baseQuery: fetchBaseQuery({ baseUrl: environment.api.baseUrl }),
  endpoints: (builder) => ({
    
    getAllClients: builder.query<Client[], void>({
        query: () => 'clients',
    }),

  }),
  })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetAllClientsQuery } = clientsApi