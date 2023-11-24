import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../interfaces/clients";

export interface ClientsState {
  clients: Client[] | undefined;
  selectedClient: Client | null;
  isEditing: boolean;
  isCreating: boolean;
}

const initialState: ClientsState = {
  clients: undefined,
  selectedClient: null,
  isEditing: false,
  isCreating: false,
};

export const clientsSlice = createSlice({
  name: "clients",
  initialState: initialState,
  reducers: {
    setClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;   
    },
    setSelectedClient: (state, action: PayloadAction<Client>) => {
      state.selectedClient = action.payload;
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    setIsCreating: (state, action: PayloadAction<boolean>) => {
      state.isCreating = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClients, setIsCreating, setIsEditing, setSelectedClient } =
  clientsSlice.actions;

export default clientsSlice.reducer;
