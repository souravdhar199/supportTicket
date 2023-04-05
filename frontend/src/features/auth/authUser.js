import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// this will be initial State in the redux
const initialState = {
  user: "Sourav",
  isError: false,
  isSuccess: false,
  isLoading: false,
  messege: "",
};
//Registering User
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

//Login User
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

// This will crate a state
export const authUser = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

const useReduser = authUser.reducer;

export default useReduser;
