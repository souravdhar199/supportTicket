import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// this will be initial State in the redux
const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  messege: "",
};
//Registering User -- This is an Action
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

//Login User -- This is an Action
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

//authUser is a reducer
export const authUser = createSlice({
  name: "auth", // name of the reducer
  initialState, //takes the initial state
  reducers: {
    initialState: register,
  },
  extraReducers: (builder) => {},
});

const useReduser = authUser.reducer;

export default useReduser;
