import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UsersState {
  nameUser: string;
  ageUser: number;
  login: boolean;
  email: string;
}

const initialState: UsersState = {
  nameUser: "",
  ageUser: 0,
  login: false,
  email: "",
};

export const usersSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<string>) => {
      (state.nameUser = action.payload), (state.email = action.payload);
    },
  },
});

export const { authUser } = usersSlice.actions;
export default usersSlice.reducer;
