import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../interfaces/LoginResponse";

export interface AuthenticationState {
  isLogged: boolean;
  token: string;
  user: User | null;
}

const getInitialState = () => {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('user') ?? '{}' ) as User;

  if (userFromLocalStorage?.email) {
    return {
      isLogged: true,
      token: "",
      user: userFromLocalStorage,
    }
  }

  return {
    isLogged: false,
    token: "",
    user: null,
  }
}

const initialState: AuthenticationState = getInitialState();


export const authenticationSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogged = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
        state = initialState; 
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
